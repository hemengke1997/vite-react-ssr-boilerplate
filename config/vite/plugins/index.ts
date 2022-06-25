import { PluginOption, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import GlobPlugin from 'vite-plugin-glob'
// import mpa from './mpa'
import setupName from './setupName'

export default function setupVitePlugins({ isBuild }: { isBuild: boolean; spa: boolean }) {
  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    setupName(),
    GlobPlugin(),
    ssr(),
    // mpa({ root: 'src/pages', mpa: !spa }),
    splitVendorChunkPlugin(),
  ]

  isBuild &&
    vitePlugins.push(
      legacy({
        modernPolyfills: ['es.global-this'],
        polyfills: false,
        renderLegacyChunks: false,
      }),
    )

  // isBuild && vitePlugins.push(configCompressPlugin('gzip', false))

  return vitePlugins
}
