import path from 'path'
import { build } from 'vite'
import setupVitePlugins from '../config/vite/plugins'

const { resolve } = path

const Config = {
  outDir: resolve(__dirname, '../dist'),
  assets: 'assets',
}

;(async () => {
  await build({
    plugins: setupVitePlugins(false),
    root: resolve(__dirname, '../src/pages/index'),
    base: './',
    build: {
      outDir: Config.outDir,
      rollupOptions: {
        input: path.resolve(__dirname, '../src/pages/index/index.html'),
        output: {
          manualChunks: undefined,
          entryFileNames: (info) => {
            return `${info.name}/${info.name}-entry-[hash].js`
          },
          chunkFileNames: (info) => {
            return `${Config.assets}/chunk/${info.name}/${info.name}-chunk-[hash].js`
          },
          assetFileNames: (info) => {
            const name = info.name?.match(/src\/pages\/(.+)\//) || info.name?.match(/src\/(.+)\//)

            if (name?.length) {
              return `${name[1]}/[name]-[hash].[ext]`
            }

            return `[name]/[name]-[hash].[ext]`
          },
        },
      },
    },
  })
})()
