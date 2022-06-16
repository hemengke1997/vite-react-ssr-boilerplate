import path from 'path'
import { build } from 'vite'
import setupVitePlugins from '../config/vite/plugins'

const { resolve } = path

const Config = {
  root: resolve(process.cwd(), 'src/pages'),
  outDir: resolve(process.cwd(), 'dist'),
  assets: 'assets',
}

;(async () => {
  await build({
    plugins: setupVitePlugins(false),
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    base: './',
    root: Config.root,
    build: {
      assetsDir: Config.assets,
      outDir: Config.outDir,
      emptyOutDir: false,
      rollupOptions: {
        input: path.join(Config.root, 'index/index.html'),
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
