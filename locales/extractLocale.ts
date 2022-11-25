import { localeDefault, locales } from './locales'

export { extractLocale }

function extractLocale(url) {
  const urlPaths = url.split('/')

  let locale
  let urlWithoutLocale
  const firstPath = urlPaths[1]
  if (locales.includes(firstPath)) {
    locale = firstPath
    urlWithoutLocale = `/${urlPaths.slice(2).join('/')}`
  } else {
    locale = localeDefault
    urlWithoutLocale = url
  }

  return { locale, urlWithoutLocale }
}
