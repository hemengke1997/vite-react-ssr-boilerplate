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
      },
    },
    publicDir: path.resolve(process.cwd(), 'public'),
    root: Config.root,
    server: {},

    build: {
      assetsInlineLimit: 0,
      target: 'es2015',
      assetsDir: Config.assets,
      outDir: Config.outDir,
      emptyOutDir: true,
      cssCodeSplit: true,
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: {},
          assetFileNames: (assetInfo) => {
            let extType = assetInfo?.name?.split('.').at(1) || ''
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img'
            }
            return `assets/${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: () => {
            return 'assets/js/[name]-[hash]-chunk.js'
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
