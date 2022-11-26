import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { localesMap } from './locales'

const resourcesOrigin = import.meta.glob('./*/index.ts', {
  eager: true,
  import: 'default',
})

const resources = {}

Object.keys(resourcesOrigin).forEach((k) => {
  const dir = /\.\/(.+)\//.exec(k)![1]
  resources[dir] = resourcesOrigin[k]
})

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources,
    nsSeparator: ':',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    ns: Object.keys(resources[localesMap.zh.key]),
    defaultNS: Object.keys(resources[localesMap.zh.key])[0],
    fallbackLng: [localesMap.zh.key],
    detection: {
      order: ['querystring', 'path', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'subdomain'],
      lookupFromPathIndex: import.meta.env.VITE_BASEURL?.split('/').filter((t) => !!t).length,
    },
  })

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if (newModule) {
      i18next.reloadResources()
      console.log('🌀 i18next reload all resources')
    }
  })
}

export { i18next }
