import { getBase } from '@root/shared'
import normalizePath from 'normalize-path'
import { fallbackLng } from './init'
import { localesMap } from './locales'

export function extractLocale(url: string, reqLocale?: string) {
  const urlPaths = url.replace(getBase(), '').split('/')

  const locales = Object.keys(localesMap)

  let locale = ''
  let urlWithoutLocale
  const firstPath = urlPaths[0]

  // path first
  if (locales.includes(firstPath)) {
    locale = localesMap[firstPath]
    // remove locale
    urlWithoutLocale = `/${urlPaths.slice(1).join('/')}`
  } else if (reqLocale) {
    if (locales.includes(reqLocale)) {
      locale = reqLocale
    } else if (locales.includes(reqLocale?.split('-')[0])) {
      // backward compatible
      locale = reqLocale?.split('-')[0]
    } else {
      locale = fallbackLng
    }
    urlWithoutLocale = url
  }

  return {
    locale,
    urlWithoutLocale,
    redirectTo:
      normalizePath(url, true) === normalizePath(getBase(), true) ? normalizePath(`${getBase()}/${locale}`) : '',
  }
}

export function loadLocaleJson(localesJson: Record<string, unknown>) {
  const locales = {}

  Object.keys(localesJson).forEach((k) => {
    const dir = /\.\/(.+)\.json/.exec(k)![1]
    locales[dir] = localesJson[k]
  })

  return locales
}
