import { PluginOption, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import mpa from './mpa'
import setupName from './setupName'
import shelljs from 'shelljs'
import { basename, resolve } from 'path'
import { ResolvedConfig } from 'vite'
import path from 'node:path'

// import configCompressPlugin from './compress'

export default function setupVitePlugins({ isBuild, spa }: { isBuild: boolean; spa: boolean }) {
  let config: ResolvedConfig

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    setupName(),
    ssr(),
    // mpa({ root: 'src/pages', mpa: !spa }),
    // {
    //   name: 'vite:deleteFile',
    //   apply: 'build',
    //   configResolved(resolvedConfig) {
    //     config = resolvedConfig
    //   },
    //   buildStart() {
    //     // 如果是spa，先删除打包目标文件夹中的js文件，再打包
    //     if (spa) {
    //       const dist = `${config.build.outDir || 'dist'}`
    //       console.log(dist, 'dist')
    //       shelljs.rm('-rf', resolve(`${dist}/subpage/*.js`))
    //     }
    //   },
    // },

    // vite-plguin-ssr 在build的时候打了多入口了，这里没办法阻止
    {
      name: 'vite:setupInput',
      apply: 'build',
      config: (config) => {
        console.log(config, 'ccc')
        function entryPoints(): Record<string, string> {
          return serverEntryPoints()
        }
        // https://github.com/brillout/vite-plugin-ssr/blob/HEAD/vite-plugin-ssr/node/plugin/build.ts#L61-L62
        function serverEntryPoints(): Record<string, string> {
          const serverEntry = path.resolve(__dirname, '../../../pageFiles.js')
          const entryName = basename(serverEntry).replace(/\.js$/, '')
          const entryPoints = {
            [entryName]: serverEntry,
          }
          return entryPoints
        }
        const input = {
          ...entryPoints(),
        }
        return {
          build: {
            rollupOptions: {
              input,
            },
          },
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

  // isBuild && vitePlugins.push(configCompressPlugin('gzip', false))

  return vitePlugins
}
