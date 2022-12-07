import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import type { Env } from '@root/shared/env'
import { publicTypescript } from 'vite-plugin-public-typescript'
import timeReporter from 'vite-plugin-time-reporter'
import browserslist from 'browserslist'

import { configVisualizerConfig } from './visualizer'

const browserslistConfig = browserslist.loadConfig({ path: '.' })

export function setupVitePlugins({
  isBuild,
  ssrBuild,
  mode: _mode,
}: {
  isBuild: boolean
  ssrBuild: boolean
  mode: Env
}) {
  const vitePlugins: PluginOption[] = [
    react(),
    ssr({
      disableAutoFullBuild: true,
      includeAssetsImportedByServer: false,
    }),
    configVisualizerConfig(),
    publicTypescript({
      ssrBuild,
      inputDir: 'publicTypescript',
      outputDir: 'lib',
      sideEffects: false,
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
