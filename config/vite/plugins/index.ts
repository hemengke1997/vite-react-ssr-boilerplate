import { createRequire } from 'node:module'
import path from 'node:path'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import colors from 'picocolors'
import type { PluginOption } from 'vite'
import { normalizePath } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import MagicString from 'magic-string'
import type { Env } from '@root/shared/env'
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
import { publicTypescript } from 'vite-plugin-public-typescript'
import timeReporter from 'vite-plugin-time-reporter'
import { configVisualizerConfig } from './visualizer'

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

export function setupVitePlugins({
  isBuild,
  ssrBuild,
  mode: _mode,
}: {
  isBuild: boolean
  ssrBuild: boolean
  mode: keyof typeof Env
}) {
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
    publicTypescript({ ssrBuild, inputDir: 'publicTypescript', outputDir: 'lib' }),
    timeReporter(),
  ]

  isBuild &&
    vitePlugins.push(
      legacy({
        modernPolyfills: ['es.global-this'],
        polyfills: true,
        renderLegacyChunks: true,
      }),
    )

  return vitePlugins
}
