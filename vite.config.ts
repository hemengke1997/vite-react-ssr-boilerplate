import path from 'path'
import { UserConfig } from 'vite'
import { ConfigEnv } from 'vite'
import setupVitePlugins from './config/vite/plugins'

const { resolve } = path

export const Config = {
  root: resolve(process.cwd(), './src/pages'),
  outDir: resolve(process.cwd(), 'dist'),
  assets: 'assets',
}

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    plugins: [setupVitePlugins(isBuild)],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
    publicDir: path.resolve('./public/'),
    root: Config.root,
    server: {},
    base: './',

    build: {
      assetsDir: Config.assets,
      outDir: Config.outDir,
      emptyOutDir: true,
      cssCodeSplit: true,
      rollupOptions: {
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
  }
}
