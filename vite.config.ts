import { UserConfig, ConfigEnv } from 'vite'
import path from 'path'
import { setupVitePlugins } from './config/vite/plugins'
import { getContentHash, getHash } from './config/vite/utils/helper'

// https://vitejs.dev/config/
// eslint-disable-next-line no-restricted-syntax
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    plugins: [
      setupVitePlugins({
        isBuild,
        spa: false,
      }),
    ],
    optimizeDeps: { exclude: ['react-streaming', 'react-streaming/client'] },
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
        '@root': process.cwd(),
      },
    },
    css: {},

    build: {
      assetsInlineLimit: 0,
      target: 'es2015',
      emptyOutDir: true,
      cssCodeSplit: true,
      manifest: true,
      minify: 'esbuild',
      reportCompressedSize: true,
      rollupOptions: {
        treeshake: 'recommended',
        output: {
          format: 'es',
          assetFileNames: (assetInfo) => {
            let extType = path.extname(assetInfo.name || '').split('.')[1]
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType!)) {
              extType = 'img'
            }
            debugger
            const hash = getContentHash(assetInfo.source)
            if (assetInfo.name?.endsWith('?extractStyles&lang.css')) {
              // dist/client/assets/index.page.server.jsx_extractStyles_lang.e4e33422.css
              // => dist/client/assets/index.page.server.e4e33422.css
              const nameBase = assetInfo.name.split('.').slice(0, -2).join('.')
              return `assets/${extType}/${nameBase}.${hash}[extname]`
            }
            if (extType === 'img' && assetInfo.name) {
              // const dir = assetInfo.name?.match(/(?<=pages\/)(.*)(?=\/images)/)
              // xxxx/yyy/images/aaa.png => yyy
              const dir = path.basename(path.dirname(path.dirname(assetInfo.name)))
              if (dir) {
                return `assets/${extType}/${dir}/[name].${hash}[extname]`
              }
            }
            return `assets/${extType}/[name].${hash}[extname]`
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
  }
}
