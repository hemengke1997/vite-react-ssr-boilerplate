import { UserConfig } from 'vite'
import { ConfigEnv } from 'vite'
import { setConfig } from './config/vite/utils/config'
import { deepMerge } from './config/vite/utils/helper'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return deepMerge<UserConfig>(setConfig({ isBuild, spa: false }), {
    build: {
      emptyOutDir: true,
    },
  })

  // return {
  //   plugins: [setupVitePlugins(isBuild)],

  //   resolve: {
  //     alias: {
  //       '@': path.resolve(process.cwd(), 'src'),
  //     },
  //   },
  //   publicDir: path.resolve('./public/'),
  //   root: Config.root,
  //   server: {},
  //   // base: './',

  //   build: {
  //     assetsDir: Config.assets,
  //     outDir: Config.outDir,
  //     emptyOutDir: true,
  //     cssCodeSplit: true,
  //     rollupOptions: {
  //       output: {
  //         manualChunks: undefined,
  //         entryFileNames: (info) => {
  //           return `${info.name}/${info.name}-entry-[hash].js`
  //         },
  //         chunkFileNames: (info) => {
  //           return `${Config.assets}/chunk/${info.name}/${info.name}-chunk-[hash].js`
  //         },
  //         assetFileNames: (info) => {
  //           const name = info.name?.match(/src\/pages\/(.+)\//) || info.name?.match(/src\/(.+)\//)

  //           if (name?.length) {
  //             return `${name[1]}/[name]-[hash].[ext]`
  //           }

  //           return `[name]/[name]-[hash].[ext]`
  //         },
  //       },
  //     },
  //   },
  // }
}
