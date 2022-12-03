import path from 'node:path'
import type { RollupOptions } from 'rollup'
import { normalizePath } from 'vite'

export function setupRollupOptions(root: string, ssrBuild: boolean | undefined): RollupOptions {
  return {
    output: {
      format: 'es',
      assetFileNames: (assetInfo) => {
        let extType = path.extname(assetInfo.name || '').split('.')[1]
        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType!)) {
          extType = 'img'
        }
        if (extType === 'img' && assetInfo.name) {
          const assetPath = path.relative(root, assetInfo.name)
          const dir = path.dirname(assetPath)

          if (dir) {
            return normalizePath(`assets/${extType}/${dir}/[name].[hash][extname]`)
          }
        }
        return `assets/${extType}/[name].[hash][extname]`
      },
      chunkFileNames: (chunkInfo) => {
        const chunkName = chunkInfo.name
        const server = chunkName?.endsWith('server') ? 'server.' : ''
        const name = ssrBuild ? chunkInfo.facadeModuleId?.match(/src\/pages\/(.*?)\//)?.[1] || chunkName : chunkName
        return `assets/js/${name}.${server}[hash].js`
      },
      entryFileNames: (chunkInfo) => {
        const chunkName = chunkInfo.name

        if (chunkName === 'pageFiles') {
          return '[name].js'
        }
        return `assets/js/[name].[hash].entry.js`
      },
    },
  }
}
