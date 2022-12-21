import { extractLocale } from '@root/locales'
import type { i18n as i18nType } from 'i18next'

export function onBeforeRoute(pageContext: { i18n?: i18nType; urlOriginal: string }): PageType.onBeforeRoute {
  const { i18n, urlOriginal } = pageContext
  let urlMod = urlOriginal

  const { urlWithoutLocale, locale, redirectTo } = extractLocale(urlMod, i18n?.language)
  urlMod = urlWithoutLocale

  return {
    pageContext: {
      locale,
      urlOriginal: urlMod,
      redirectTo,
    },
  }
}
