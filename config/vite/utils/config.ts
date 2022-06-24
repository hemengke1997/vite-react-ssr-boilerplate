import path, { resolve } from 'node:path'
import { UserConfig } from 'vite'
import setupVitePlugins from '../plugins'

export const Config = {
  root: process.cwd(),
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
        '@root': process.cwd(),
        'vite-plugin-ssr': path.resolve(process.cwd(), 'vite-plugin-ssr'),
      },
    },

    publicDir: path.resolve(process.cwd(), 'public'),
    // root: Config.root,
    server: {},

    build: {
      assetsInlineLimit: 0,
      target: 'es2015',
      assetsDir: Config.assets,
      emptyOutDir: true,
      cssCodeSplit: true,
      manifest: true,
      outDir: Config.outDir,
      rollupOptions: {
        treeshake: false,
        output: {
          format: 'es',
          assetFileNames: (assetInfo) => {
            let extType = assetInfo?.name?.split('.').at(1) || ''
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img'
            }
            return `assets/${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: (info) => {
            const server = info.name.endsWith('server') ? 'server-' : ''
            const name = info.facadeModuleId?.match(/src\/pages\/(.*?)\//)?.[1] || info.name
            return `assets/js/${name}-${server}[hash]-chunk.js`
          },
          entryFileNames: (info) => {
            if (info.name === 'pageFiles') {
              return '[name].js'
            }
            return 'assets/js/[name]-[hash]-entry.js'
          },
        },
      },
    },
  }
}
