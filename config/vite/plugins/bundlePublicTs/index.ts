import path from 'node:path'
import type { PluginOption, ResolvedConfig } from 'vite'
import { normalizePath, transformWithEsbuild } from 'vite'
import fg from 'fast-glob'
import fs from 'fs-extra'
import { getContentHash } from '../../utils/helper'

const publicTs = 'publicTs'

let buildLength = 0
let current = 0

interface CacheType {
  key: string
  value: string
}

let cacheMap = new Map<CacheType['key'], CacheType['value']>()

class ManifestCache {
  setCache(c: CacheType) {
    this.removeCache(c)

    cacheMap.set(c.key, c.value)
  }

  getCache(k: CacheType['key']) {
    return cacheMap.get(k)
  }

  removeCache(c: CacheType) {
    if (cacheMap.has(c.key)) {
      cacheMap.delete(c.key)
    }
  }

  resetCache() {
    cacheMap = new Map<CacheType['key'], CacheType['value']>()
  }

  getAll() {
    return cacheMap
  }

  async writeCache(targetPath: string) {
    const cacheObj = Object.fromEntries(this.getAll())
    const orderdCache: Record<string, string> = {}
    Object.keys(cacheObj)
      .sort()
      .forEach((k) => (orderdCache[k] = cacheObj[k]))
    await fs.ensureDir(path.dirname(targetPath))
    await fs.writeFile(targetPath, `${JSON.stringify(orderdCache, null, 2)}`)
  }
}

function build(filePath: string, outDir: string, cache: ManifestCache, code?: string) {
  code = code || fs.readFileSync(filePath, 'utf-8')
  const fileName = path.basename(filePath, path.extname(filePath))
  transformWithEsbuild(code, fileName, {
    loader: 'ts',
    format: 'esm',
    minify: true,
    platform: 'browser',
    sourcemap: false,
  }).then(async (res) => {
    const hash = getContentHash(res.code)
    const outPath = `lib/${fileName}.${hash}.js`
    const fp = normalizePath(path.join(outDir, outPath))
    const oldFiles = fg.sync(normalizePath(path.join(outDir, `lib/${fileName}.?(*.)js`)))
    // if exits old files
    if (oldFiles.length) {
      const oldFile = oldFiles.filter((t) => t !== fp)
      // delete old files
      oldFile.forEach(async (f) => {
        if (fs.existsSync(f)) {
          await fs.remove(f)
        }
      })
    }
    await fs.ensureDir(path.dirname(fp))
    await fs.writeFile(fp, res.code)
    cache.setCache({ key: fileName, value: outPath })
    // write cache
    current++
    if (current === buildLength) {
      cache.writeCache(`${publicTs}/manifest-${publicTs}.json`)
    }
  })
}

export function bundlePublicTs(ssrBuild: boolean): PluginOption {
  let config: ResolvedConfig

  const cache = new ManifestCache()

  return {
    name: 'vite:bundlePublicTs',
    configResolved(c) {
      config = c
    },
    buildStart() {
      if (ssrBuild) return
      const outDir = config.publicDir
      const root = config.root
      const files = fg.sync(normalizePath(path.resolve(root, `${publicTs}/*.ts`)), {
        cwd: root,
        absolute: true,
      })

      buildLength = files.length

      files.forEach((f) => {
        build(f, outDir, cache)
      })
    },

    async handleHotUpdate(ctx) {
      if (path.extname(ctx.file) === 'ts' && ctx.file.includes(normalizePath(path.resolve(config.root, publicTs)))) {
        const code = await ctx.read()
        build(ctx.file, config.publicDir, cache, code)
        ctx.server.ws.send({
          type: 'full-reload',
        })
        return []
      }
    },
  }
}
