import { getBase } from '@root/shared'
import normalizePath from 'normalize-path'
import { localesMap } from './locales'

export function extractLocale(url: string, reqLocale?: string) {
  const urlPaths = url.replace(getBase(), '').split('/')

  const locales = Object.keys(localesMap)

  let locale: string
  let urlWithoutLocale
  const firstPath = urlPaths[0]

  // path first
  if (locales.includes(firstPath)) {
    locale = localesMap[firstPath]
    // remove locale
    urlWithoutLocale = `/${urlPaths.slice(1).join('/')}`
  } else {
    locale = reqLocale?.split('-')[0] || localesMap.en || ''
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
