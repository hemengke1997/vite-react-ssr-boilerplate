const resourcesOrigin = import.meta.glob('./*/index.ts', {})

const localesMap: Record<string, string> = {}

Object.keys(resourcesOrigin).forEach((k) => {
  const dir = /\.\/(.+)\//.exec(k)![1]
  localesMap[dir] = dir
})

export { localesMap }
