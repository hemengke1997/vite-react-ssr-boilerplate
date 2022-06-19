import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import ssr from 'vite-plugin-ssr/plugin'
import mpa from './mpa'
import setupName from './setupName'
import shelljs from 'shelljs'
import { resolve } from 'path'
import { ResolvedConfig } from 'vite'

// import configCompressPlugin from './compress'

export default function setupVitePlugins({ isBuild, spa }: { isBuild: boolean; spa: boolean }) {
  let config: ResolvedConfig

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    setupName(),
    ssr(),
    mpa({ root: 'src/pages', mpa: !spa }),
    {
      name: 'vite:deleteFile',
      apply: 'build',
      configResolved(resolvedConfig) {
        config = resolvedConfig
      },
      buildStart() {
        // 如果是spa，先删除打包目标文件夹中的js文件，再打包
        if (spa) {
          const dist = `${config.build.outDir || 'dist'}`
          console.log(dist, 'dist')
          shelljs.rm('-rf', resolve(`${dist}/subpage/*.js`))
        }
      },
    },
    {
      name: 'vite:copyChunkToHtml',
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

  // isBuild && vitePlugins.push(configCompressPlugin('gzip', false))

  return vitePlugins
}
