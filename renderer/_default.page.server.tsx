import { renderToString } from 'react-dom/server'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import { BASE } from '@root/shared/constant'
import { getLibAssets } from '@root/shared'
import { createApp } from './createApp'

export const passToClient = ['pageProps']

export async function render(pageContext: PageContextBuiltIn & PageType.PageContext) {
  const pageHtml = renderToString(await createApp(pageContext))

  const { pageProps } = pageContext
  const { checkPlatform = true, isMobile = false } = pageProps
  const title = pageProps?.title || 'title'
  const desc = pageProps?.description || 'description'
  const keywords = pageProps?.keywords || 'keywords'

  const documentHtml = escapeInject/* html */ `<!DOCTYPE html>
  <html lang="zh-CN" is-mobile="${isMobile.toString()}" check-platform='${checkPlatform.toString()}'>
    <head>
      <meta charset="UTF-8" />
      <meta name="renderer" content="webkit" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <link rel="icon" href="${BASE}favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0${
        isMobile ? ', maximum-scale=1.0, user-scalable=no' : ''
      }" />
      <meta name="description" content="${desc}" />
      <meta property="description" content="${desc}" />
      <meta name="og:description" content="${desc}" />
      <meta property="og:description" content="${desc}" />
      <meta name="keywords" content="${keywords}" />
      <meta name="page_title" content="${title}" />
      <meta property="page_title" content="${title}" />
      <meta name="og:title" content="${title}" />
      <meta property="og:title" content="${title}" />
      <script src=${getLibAssets('/lib/initGlobalVars.js')}></script>
      <script src=${getLibAssets('/lib/flexible.js')}></script>
      <script src=${getLibAssets('/lib/checkPlatform.js')}></script>
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
    </body>
  </html>`

  return {
    documentHtml,
    pageContext: {
      pageProps,
    },
  }
}

export async function onBeforeRender(pageContext): PageType.onBeforeRender {
  return {
    pageContext: pageContext.exports.pageContext,
  }
}
