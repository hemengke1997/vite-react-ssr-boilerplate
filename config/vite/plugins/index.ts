import { splitVendorChunkPlugin, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import legacy from '@vitejs/plugin-legacy'
import progress from 'vite-plugin-progress'
import colors from 'picocolors'

let mounted = false

export function setupVitePlugins({ isBuild }: { isBuild: boolean; spa: boolean }) {
  const vitePlugins: PluginOption[] = [
    react(),
    ssr(),
    splitVendorChunkPlugin(),
    progress(),
    {
      name: 'vite:log-real-server-time',
      apply: 'serve',
      transformIndexHtml(_, { server }) {
        if (!mounted) {
          const info = server!.config.logger.info

          const viteStartTime = global.__vite_server_start_time ?? false
          const startupDurationString = viteStartTime
            ? colors.dim(`ready in ${colors.white(colors.bold(Math.ceil(performance.now() - viteStartTime)))} ms`)
            : ''

          info(`\n🍃 ${colors.green(`${colors.bold('VITE')}`)}  ${startupDurationString}\n`)
          mounted = true
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
