// import { extractLocale } from '@root/locales'

export { onBeforeRoute }

function onBeforeRoute(pageContext) {
  // const urlMod = pageContext.urlOriginal

  // const { urlWithoutLocale, locale } = extractLocale(urlMod)
  // urlMod = urlWithoutLocale
  // console.log('🚀 -> onBeforeRoute -> urlMod', urlMod)

  return {
    pageContext: {
      // locale,
      urlOriginal: pageContext.urlOriginal,
    },
  }
}
