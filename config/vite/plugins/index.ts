import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import mpa from './mpa'
import setupName from './setupName'
// import configCompressPlugin from './compress'

export default function setupVitePlugins(isBuild: boolean) {
  const vitePlugins: PluginOption[] = [
    vue({ reactivityTransform: true }),
    vueJsx(),
    setupName(),
    mpa({ root: 'src/pages' }),
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
