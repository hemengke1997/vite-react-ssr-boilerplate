import { extractLocale } from '@root/locales'

export { onBeforeRoute }

function onBeforeRoute(pageContext) {
  let urlMod = pageContext.urlOriginal

  const { urlWithoutLocale, locale } = extractLocale(urlMod)
  urlMod = urlWithoutLocale

  return {
    pageContext: {
      locale,
      urlOriginal: urlMod,
    },
  }
}
