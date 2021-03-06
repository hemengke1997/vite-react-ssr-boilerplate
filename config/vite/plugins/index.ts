import { PluginOption, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import setupName from './setupName'
import ssr from 'vite-plugin-ssr/plugin'
import legacy from '@vitejs/plugin-legacy'
import GlobPlugin from 'vite-plugin-glob'
import progress from 'vite-plugin-progress'
import colors from 'picocolors'

let mounted = false

export default function setupVitePlugins({ isBuild }: { isBuild: boolean }) {
  const vitePlugins: PluginOption[] = [
    react(),
    GlobPlugin(),
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

          info(`\nš ${colors.green(`${colors.bold('VITE')}`)}  ${startupDurationString}\n`)
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
