import path, { resolve } from 'path'
import { UserConfig } from 'vite'
import setupVitePlugins from '../plugins'

export const Config = {
  root: resolve(process.cwd(), 'src/pages'),
  outDir: resolve(process.cwd(), 'dist'),
  assets: 'assets',
}

export const setConfig = ({ isBuild, spa }: { isBuild: boolean; spa: boolean }): UserConfig => {
  return {
    plugins: [
      setupVitePlugins({
        isBuild,
        spa,
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    publicDir: path.resolve('./public/'),
    root: Config.root,
    server: {},

    build: {
      // assetsInlineLimit: 0,
      // target: 'es2015',
      // assetsDir: Config.assets,
      // outDir: Config.outDir,
      // emptyOutDir: true,
      // cssCodeSplit: true,
      // manifest: true,
      // rollupOptions: {
      //   output: {
      //     manualChunks: {},
      //     entryFileNames: (info) => {
      //       return `${info.name}/${info.name}-entry-[hash].js`
      //     },
      //     chunkFileNames: (info) => {
      //       return `${Config.assets}/chunk/${info.name}/${info.name}-chunk-[hash].js`
      //     },
      //     assetFileNames: (info) => {
      //       const name = info.name?.match(/src\/pages\/(.+)\//) || info.name?.match(/src\/(.+)\//)
      //       if (name?.length) {
      //         return `${name[1]}/[name]-[hash].[ext]`
      //       }
      //       return `[name]/[name]-[hash].[ext]`
      //     },
      //   },
      // },
    },
  }
}
