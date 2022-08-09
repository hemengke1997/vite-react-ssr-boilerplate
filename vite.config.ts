import path from 'path'
import { UserConfig, ConfigEnv } from 'vite'
import { setupVitePlugins } from './config/vite/plugins'
import { getContentHash, getHash } from './config/vite/utils/helper'

export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    plugins: [
      setupVitePlugins({
        isBuild,
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
        '@root': process.cwd(),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            'border-radius-base': '4px',
          },
        },
      },
    },
    define: {
      'process.env': process.env,
    },

    build: {
      target: 'es2015',
      emptyOutDir: true,
      cssCodeSplit: true,
      manifest: true,
      ssrManifest: true,
      minify: 'esbuild',
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          format: 'es',
          assetFileNames: (assetInfo) => {
            let extType = path.extname(assetInfo.name || '').split('.')[1]
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType!)) {
              extType = 'img'
            }
            const hash = getContentHash(assetInfo.source)

            if (extType === 'img' && assetInfo.name) {
              const dir = path.basename(path.dirname(path.dirname(assetInfo.name)))
              if (dir) {
                return `assets/${extType}/${dir}/[name].${hash}[extname]`
              }
            }
            return `assets/${extType}/[name].${hash}[extname]`
          },
          chunkFileNames: (chunkInfo) => {
            const server = chunkInfo.name.endsWith('server') ? 'server.' : ''
            const name = chunkInfo.facadeModuleId?.match(/src\/pages\/(.*?)\//)?.[1] || chunkInfo.name

            if (chunkInfo.isDynamicEntry) {
              const hash = getHash(chunkInfo)
              return `assets/js/${name}.${server}${hash}.chunk.js`
            } else {
              return `assets/js/${name}.${server}[hash].chunk.js`
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'pageFiles') {
              return '[name].js'
            }
            const hash = getHash(chunkInfo)
            return `assets/js/[name].${hash}.entry.js`
          },
        },
      },
    },
  }
}
