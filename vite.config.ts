import path from 'path'
import { UserConfig, ConfigEnv } from 'vite'
import { setupVitePlugins } from './config/vite/plugins'
import { getContentHash, getHash } from './config/vite/utils/helper'
import { BASE } from './shared/constant'

export default ({ command, ssrBuild }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  // const isProd = process.env.NODE_ENV === 'production'

  return {
    base: BASE,
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
            'primary-color': '#FF9800',
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
            if (assetInfo.name?.endsWith('?extractStyles&lang.css')) {
              const nameBase = assetInfo.name.split('.').slice(0, -2).join('.')
              return `assets/${extType}/${nameBase}.${hash}[extname]`
            }
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
            const name = ssrBuild
              ? chunkInfo.facadeModuleId?.match(/src\/pages\/(.*?)\//)?.[1] || chunkInfo.name
              : chunkInfo.name
            if (chunkInfo.isDynamicEntry) {
              const hash = getHash(chunkInfo)
              return `assets/js/${name}.${server}${hash}.js`
            } else {
              return `assets/js/${name}.${server}[hash].js`
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
