import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          key: 'hello world',
        },
      },
    },
    nsSeparator: '.',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'path', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'subdomain'],
    },
  })

export { i18next }
