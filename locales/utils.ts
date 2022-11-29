import { getBase } from '@root/shared'
import normalizePath from 'normalize-path'
import { localesMap } from './locales'

export function extractLocale(url: string) {
  const urlPaths = url.replace(getBase(), '').split('/')

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
    locale = localesMap.en
    urlWithoutLocale = url
  }

  return {
    locale,
    urlWithoutLocale,
    redirectTo:
      normalizePath(url, true) === normalizePath(getBase(), true) ? normalizePath(`${getBase()}/${locale.key}`) : '',
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
