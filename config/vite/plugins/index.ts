import { createRequire } from 'node:module'
import path from 'node:path'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import colors from 'picocolors'
import type { PluginOption, ResolvedConfig } from 'vite'
import { normalizePath, transformWithEsbuild } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
import MagicString from 'magic-string'
import type { Env } from '@root/shared/env'
import fg from 'fast-glob'
import fs from 'fs-extra'
import { configVisualizerConfig } from './visualizer'

function build(filePath: string, outDir: string, code?: string) {
  code = code || fs.readFileSync(filePath, 'utf-8')
  const fileName = path.basename(filePath, path.extname(filePath))
  transformWithEsbuild(code, fileName, {
    loader: 'ts',
    format: 'esm',
    minify: true,
    platform: 'browser',
    sourcemap: false,
  }).then(async (res) => {
    const filePath = path.join(outDir, `lib/${fileName}.js`)
    if (fs.existsSync(filePath)) {
      await fs.remove(filePath)
    }
    await fs.ensureDir(path.dirname(filePath))
    await fs.writeFile(filePath, res.code)
  })
}

function resolveNodeModules(libName: string, ...dir: string[]) {
  const esRequire = createRequire(import.meta.url)
  let modulePath = ''
  try {
    modulePath = normalizePath(esRequire.resolve(libName))
  } catch (error) {
    modulePath = normalizePath(require.resolve(libName))
  }
  const lastIndex = modulePath.lastIndexOf(libName)
  return normalizePath(path.resolve(modulePath.substring(0, lastIndex), ...dir))
}

export function setupVitePlugins({ isBuild, mode }: { isBuild: boolean; mode: keyof typeof Env }) {
  let config: ResolvedConfig
  const vitePlugins: PluginOption[] = [
    react(),
    ssr({
      disableAutoFullBuild: true,
      includeAssetsImportedByServer: false,
    }),
    configVisualizerConfig(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
    {
      name: 'vite:addAntdInDev',
      enforce: 'pre',
      async transform(code, id) {
        return null
        // eslint-disable-next-line no-unreachable
        if (id.includes('PCLayout/index.tsx') && !isBuild) {
          let s: MagicString | undefined
          const str = () => s || (s = new MagicString(code))

          const p = resolveNodeModules('antd', 'antd/dist/antd.less')

          str().appendLeft(0, `import '${p}';\n`)
          return {
            map: null,
            code: str().toString(),
          }
        }
      },
    },
    {
      name: 'vite:log-real-server-time',
      apply: 'serve',
      transformIndexHtml(_, { server }) {
        if (!global.__vite_dom_mounted) {
          const info = server!.config.logger.info

          const viteStartTime = global.__vite_server_start_time ?? false
          const startupDurationString = viteStartTime
            ? colors.dim(
                `DOM ready in ${colors.white(
                  colors.bold((Number(Math.ceil(performance.now() - viteStartTime)) / 1000).toFixed(2)),
                )} s`,
              )
            : ''

          info(`\n🍃 ${colors.green(`${colors.bold('VITE')}`)}  ${startupDurationString}\n`)
          global.__vite_dom_mounted = true
        }
      },
    },
    {
      name: 'vite:bundlePublicTs',
      configResolved(c) {
        config = c
      },
      buildStart() {
        const outDir = config.publicDir
        const root = config.root
        const files = fg.sync(normalizePath(path.resolve(root, 'publicTs/*.ts')), {
          cwd: root,
          absolute: true,
        })

        files.forEach((f) => {
          build(f, outDir)
        })
      },
      async handleHotUpdate(ctx) {
        if (ctx.file.includes(normalizePath(path.resolve(config.root, 'publicTs')))) {
          const code = await ctx.read()
          build(ctx.file, config.publicDir, code)
        }
      },
    },
  ]

  isBuild &&
    vitePlugins.push(
      legacy({
        modernPolyfills: ['es.global-this'],
        polyfills: true,
        renderLegacyChunks: mode === 'production',
      }),
    )

  return vitePlugins
}
