import { UserConfig, ConfigEnv } from 'vite'
import path, { resolve } from 'path'
import setupVitePlugins from './config/vite/plugins'
import { getContentHash, getHash } from './config/vite/utils/helper'

export const Config = {
  root: process.cwd(),
  outDir: resolve(process.cwd(), 'dist'),
  assets: 'assets',
}

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    plugins: [
      setupVitePlugins({
        isBuild,
        spa: false,
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
        '@root': process.cwd(),
      },
    },

    publicDir: path.resolve(process.cwd(), 'public'),
    root: Config.root,
    server: {},

    build: {
      assetsInlineLimit: 0,
      target: 'es2015',
      assetsDir: Config.assets,
      emptyOutDir: true,
      cssCodeSplit: true,
      manifest: true,
      outDir: Config.outDir,
      minify: 'esbuild',

      rollupOptions: {
        treeshake: 'smallest',
        output: {
          format: 'es',
          assetFileNames: (assetInfo) => {
            let extType = path.extname(assetInfo.name || '').split('.')[1]
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType!)) {
              extType = 'img'
            }
            const hash = getContentHash(assetInfo.source)
            return `assets/${extType}/[name].${hash}.[ext]`
          },

          chunkFileNames: (chunkInfo) => {
            const server = chunkInfo.name.endsWith('server') ? 'server-' : ''
            const name = chunkInfo.facadeModuleId?.match(/src\/pages\/(.*?)\//)?.[1] || chunkInfo.name

            if (chunkInfo.isDynamicEntry || chunkInfo.name === 'vendor') {
              const hash = getHash(chunkInfo)
              return `assets/js/${name}-${server}${hash}.chunk.js`
            } else {
              return `assets/js/${name}-${server}[hash].chunk.js`
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'pageFiles') {
              return '[name].js'
            }
            const hash = getHash(chunkInfo)
            return `assets/js/entry-${hash}.js`
          },
        },
      },
    },

    optimizeDeps: {
      exclude: ['lodash-es'],
    },
  }
}
