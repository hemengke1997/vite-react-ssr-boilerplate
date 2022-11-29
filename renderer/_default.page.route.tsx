import { extractLocale } from '@root/locales'

export function onBeforeRoute(pageContext) {
  let urlMod = pageContext.urlOriginal

  const { urlWithoutLocale, locale, redirectTo } = extractLocale(urlMod)
  urlMod = urlWithoutLocale

  return {
    pageContext: {
      locale,
      urlOriginal: urlMod,
      redirectTo,
    },
  }
}
