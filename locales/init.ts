import type { i18n as i18nType } from 'i18next'
import i18next from 'i18next'
import { getBase } from '@root/shared'

export const lookupTarget = 'i18next'

export const fallbackLng = 'en'

const createI18nextInstance = () => {
  return i18next.createInstance({
    debug: false,
    nsSeparator: '.',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    fallbackLng,
  })
}

let clientI18next: i18nType

let serverI18next: i18nType

export async function getI18next(server?: boolean) {
  const _i18n: i18nType = createI18nextInstance()
  if (server) {
    if (!serverI18next) {
      const i18nextMiddleware = (await import('i18next-http-middleware')).default
      serverI18next = _i18n.use(new i18nextMiddleware.LanguageDetector({}, {}))
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

      const LanguageDetector = (await import('i18next-browser-languagedetector')).default

      const { initReactI18next } = await import('react-i18next')

      clientI18next = _i18n.use(LanguageDetector).use(initReactI18next)

      clientI18next.init({
        debug: false,
        resources,
        ns: Object.keys(resources[fallbackLng]),
        defaultNS: Object.keys(resources[fallbackLng])[0],
        fallbackLng,
        detection: {
          order: [
            'querystring',
            'cookie',
            'localStorage',
            'sessionStorage',
            'navigator',
            'htmlTag',
            'path',
            'subdomain',
          ],
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
