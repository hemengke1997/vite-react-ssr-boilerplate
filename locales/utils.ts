import type { DirectionType } from '@root/renderer/global/useGlobalContext'
import { getBase } from '@root/shared'
import type { Locale } from 'antd/es/locale-provider'
import normalizePath from 'normalize-path'
import { fallbackLng } from './init'
import { getLocalesMap } from './locales'

export function urlLocaleRegExp(maybeLang: string) {
  return RegExp(`(?<=/)${maybeLang}(?=[\/|\s]?)`)
}

export function extractLocale(url: string, reqLocale?: string) {
  const localesMap = getLocalesMap()
  const locales = Object.keys(localesMap)

  let locale = ''
  let urlWithoutLocale = url

  const maybeLang = url.replace(getBase(), '').split('/')[0]

  // path first
  if (locales.includes(maybeLang)) {
    locale = localesMap[maybeLang]?.locale ?? ''
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
  } else {
    // no req locale
    // use default `en`
    locale = fallbackLng
  }

  return {
    locale,
    urlWithoutLocale: normalizePath(urlWithoutLocale, false),
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

export async function getLibLocale(locale: string) {
  const localesMap = getLocalesMap()

  const localesInfo: Record<
    string,
    { locale?: string | undefined; antd: Locale; dayjs: any; direction?: DirectionType }
  > = {
    'zh': {
      ...localesMap.zh,
      dayjs: (await import('dayjs/locale/zh-cn')).default,
      antd: (await import('antd/locale/zh_CN')).default,
    },
    'en': {
      ...localesMap.en,
      dayjs: (await import('dayjs/locale/en')).default,
      antd: (await import('antd/locale/en_US')).default,
    },
    'zh-TW': {
      ...localesMap.en,
      dayjs: (await import('dayjs/locale/zh-tw')).default,
      antd: (await import('antd/locale/zh_TW')).default,
    },
  }

  return localesInfo[locale]
}
