import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import colors from 'picocolors'
import { PluginOption } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

import { configVisualizerConfig } from './visualizer'

export function setupVitePlugins({ isBuild }: { isBuild: boolean }) {
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
  ]

  isBuild &&
    vitePlugins.push(
      legacy({
        modernPolyfills: ['es.global-this'],
        polyfills: false,
        renderLegacyChunks: false,
      }),
    )

  return vitePlugins
}
