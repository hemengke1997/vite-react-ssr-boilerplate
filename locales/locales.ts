import type { DirectionType } from '@root/renderer/global/useGlobalContext'
import { isNode, isVite } from '@root/shared'

export interface LocaleMapType {
  antd: string
  dayjs: string
  direction: DirectionType
}

const localesMap: Record<
  string,
  | ({
      locale: string
    } & Partial<LocaleMapType>)
  | undefined
> = {}

;(async function initLocalesMap() {
  if (isVite()) {
    const resourcesOrigin = import.meta.glob<LocaleMapType>('./*/localeMap.ts', {
      import: 'localeMap',
    })

    const resourcesKeys = Object.keys(resourcesOrigin)
    for (let i = 0; i < resourcesKeys.length; i++) {
      const k = resourcesKeys[i]
      const localeMap = await resourcesOrigin[k]()

      const dir = /\.\/(.+)\//.exec(k)![1]
      localesMap[dir] = {
        locale: dir,
        ...localeMap,
      }
    }
  } else if (isNode()) {
    const { fileURLToPath } = await import('node:url')
    const { default: path } = await import('node:path')
    const { default: fg } = await import('fast-glob')
    const dir = path.dirname(fileURLToPath(import.meta.url))
    const dirs = fg.sync('./**', { onlyDirectories: true, cwd: dir, deep: 1 })

    dirs.forEach((d) => {
      localesMap[d] = {
        locale: d,
      }
    })
  }
})()

export { localesMap }
