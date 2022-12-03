import type { DirectionType } from '@root/renderer/global/useGlobalContext'

export interface LocaleMapType {
  antd: string
  dayjs: string
  direction: DirectionType
}

const localesMap: Record<
  string,
  | ({
      locale: string
    } & LocaleMapType)
  | undefined
> = {}

async function initLocalesMap() {
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
}

await initLocalesMap()

export { localesMap }
