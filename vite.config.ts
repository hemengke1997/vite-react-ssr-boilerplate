import path from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv, normalizePath } from 'vite'
import { setupVitePlugins } from './config/vite/plugins'
import { getContentHash, getHash, wrapperEnv } from './config/vite/utils/helper'
import { LessPluginRemoveAntdGlobalStyles } from './scripts/remove-antd-global-style'
import { BASE } from './shared/constant'
import { Env } from './shared/enum'

export default ({ command, ssrBuild, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const isBuild = command === 'build'

  const env = loadEnv(mode, root) as ImportMetaEnv

  wrapperEnv(env)

  return {
    base: BASE,
    mode,
    plugins: [
      setupVitePlugins({
        isBuild,
        ssrBuild,
        mode: mode as Env,
      }),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
        {
          find: '@root',
          replacement: path.resolve(__dirname),
        },
        {
          find: /^~/,
          replacement: `${path.resolve(__dirname, './node_modules')}/`,
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          plugins: [new LessPluginRemoveAntdGlobalStyles()],
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
    ssr: {
      optimizeDeps: {
        disabled: 'build',
      },
      noExternal: isBuild ? ['react-vant'] : [],
    },
    optimizeDeps: {
      include: ['antd/lib/locale/zh_CN'],
    },
    build: {
      emptyOutDir: true,
      cssCodeSplit: true,
      minify: mode === Env.test ? false : 'esbuild',
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2048,
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
              const assetPath = path.relative(root, assetInfo.name)
              const dir = path.dirname(assetPath)

              if (dir) {
                return normalizePath(`assets/${extType}/${dir}/[name].${hash}[extname]`)
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
