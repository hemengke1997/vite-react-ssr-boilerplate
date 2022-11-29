import type { i18n as i18nType } from 'i18next'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getBase } from '@root/shared'
import { localesMap } from './locales'

const lookupTarget = 'i18next'

const createI18nextInstance = () => {
  return i18next.createInstance({
    debug: false,
    nsSeparator: '.',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: [localesMap.en.key],
    detection: {
      order: ['path', 'cookie', 'localStorage', 'sessionStorage'],
      lookupFromPathIndex: getBase()
        ?.split('/')
        .filter((t) => !!t).length,
      caches: ['localStorage', 'sessionStorage', 'cookie'],
      lookupLocalStorage: lookupTarget,
      lookupSessionStorage: lookupTarget,
      lookupCookie: lookupTarget,
    },
  })
}

let clientI18next: i18nType

let serverI18next: i18nType

export function getI18next(server?: boolean) {
  const _i18n: i18nType = createI18nextInstance()
  if (server) {
    if (!serverI18next) {
      serverI18next = _i18n
      serverI18next.init({ debug: false, resources: {} })
    }
    return serverI18next
  } else {
    if (!clientI18next) {
      const resourcesOrigin = import.meta.glob('./*/index.ts', {
        eager: true,
        import: 'default',
      })

      const resources = {}

      Object.keys(resourcesOrigin).forEach((k) => {
        const dir = /\.\/(.+)\//.exec(k)![1]
        resources[dir] = resourcesOrigin[k]
      })

      clientI18next = _i18n.use(LanguageDetector).use(initReactI18next)

      clientI18next.init({
        debug: false,
        resources,
        ns: Object.keys(resources[localesMap.en.key]),
        defaultNS: Object.keys(resources[localesMap.en.key])[0],
        fallbackLng: [localesMap.en.key],
      })
    }
    return clientI18next
  }
}

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if (newModule) {
      i18next.reloadResources()
      console.log('🌀 i18next reload all resources')
    }
  })
}
