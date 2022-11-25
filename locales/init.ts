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

if (!i18next.isInitialized) {
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: false,
      resources,
      nsSeparator: ':',
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
      ns: ['home'],
      fallbackLng: [localesMap.zh.key],
      detection: {
        order: ['querystring', 'path', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'subdomain'],
        lookupFromPathIndex: import.meta.env.VITE_BASEURL?.split('/').filter((t) => !!t).length,
      },
    })
}

export { i18next }
