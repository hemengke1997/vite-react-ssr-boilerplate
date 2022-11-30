import { getBase } from '@root/shared'
import normalizePath from 'normalize-path'
import { fallbackLng } from './init'
import { localesMap } from './locales'

export function urlLocaleRegExp(maybeLang: string) {
  return RegExp(`(?<=/)${maybeLang}(?=[\/|\s]?)`)
}

export function extractLocale(url: string, reqLocale?: string) {
  const locales = Object.keys(localesMap)

  let locale = ''
  let urlWithoutLocale

  const maybeLang = url.replace(getBase(), '').split('/')[0]

  // path first
  if (locales.includes(maybeLang)) {
    locale = localesMap[maybeLang]
    // remove locale
    urlWithoutLocale = url.replace(urlLocaleRegExp(maybeLang), '')
  } else if (reqLocale) {
    if (locales.includes(reqLocale)) {
      locale = reqLocale
    } else {
      // fallback
      // mainLocale: en-US ==> en
      const mainLocale = reqLocale?.split('-')[0]
      if (locales.includes(mainLocale)) {
        // backward compatible
        locale = mainLocale
      } else {
        locale = fallbackLng
      }
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
