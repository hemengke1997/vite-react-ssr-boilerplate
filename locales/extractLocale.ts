import { localesMap } from './locales'

export { extractLocale }

function extractLocale(url: string) {
  const urlPaths = url.replace(import.meta.env.VITE_BASEURL!, '').split('/')

  const locales = Object.keys(localesMap)

  let locale: {
    key: string
    value: string
  }
  let urlWithoutLocale
  const firstPath = urlPaths[0]

  if (locales.includes(firstPath)) {
    locale = localesMap[firstPath]
    urlWithoutLocale = `/${urlPaths.slice(1).join('/')}`
  } else {
    // fallback
    locale = localesMap.zh
    urlWithoutLocale = url
  }

  return { locale, urlWithoutLocale }
}
