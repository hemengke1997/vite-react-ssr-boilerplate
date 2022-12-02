import { isNode, isVite } from '@root/shared'

const localesMap: Record<string, string> = {}

;(async function () {
  if (isVite()) {
    const resourcesOrigin = import.meta.glob('./*/index.ts', {})
    Object.keys(resourcesOrigin).forEach((k) => {
      const dir = /\.\/(.+)\//.exec(k)![1]
      localesMap[dir] = dir
    })
  } else if (isNode()) {
    const { fileURLToPath } = await import('node:url')
    const { default: path } = await import('node:path')
    const { default: fg } = await import('fast-glob')
    const dir = path.dirname(fileURLToPath(import.meta.url))
    const dirs = fg.sync('./**', { onlyDirectories: true, cwd: dir, deep: 1 })

    dirs.forEach((d) => {
      localesMap[d] = d
    })
  }
})()

export { localesMap }
