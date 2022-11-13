import { createRequire } from 'node:module'
import path from 'node:path'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'
import { normalizePath } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import MagicString from 'magic-string'
import type { Env } from '@root/shared/env'
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
import { publicTypescript } from 'vite-plugin-public-typescript'
import timeReporter from 'vite-plugin-time-reporter'
import browserslist from 'browserslist'

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

const browserslistConfig = browserslist.loadConfig({ path: '.' })

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
    publicTypescript({
      ssrBuild,
      inputDir: 'publicTypescript',
      outputDir: 'lib',
      esbuildOptions: {
        target: 'es2015',
      },
    }),
    timeReporter(),
  ]

  isBuild &&
    vitePlugins.push(
      legacy({
        targets: browserslistConfig,
        modernPolyfills: ['es.global-this'],
        polyfills: true,
        renderLegacyChunks: true,
      }),
    )

  return vitePlugins
}
