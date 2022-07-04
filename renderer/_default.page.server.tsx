import { renderToString } from 'react-dom/server'
import { escapeInject, PageContextBuiltIn, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { PageContext } from './types'
import { createApp } from './createApp'
import logoUrl from '/favicon.ico'

// See https://vite-plugin-ssr.com/passToClient
// NOTE: this is important
export const passToClient = ['pageProps', 'urlPathname', 'documentProps']

// See https://vite-plugin-ssr.com/render
export async function render(pageContext: PageContextBuiltIn & PageContext): Promise<any> {
  // TODO: renderToPipeableStream Or renderToReadableStream
  // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
  // nextjs: https://github.com/vercel/next.js/blob/HEAD/packages/next/server/node-web-streams-helper.ts#L148
  // umijs: https://github.com/umijs/umi/blob/HEAD/packages/server/src/ssr.ts#L77
  // 观望中... 目前没有比较好的实践
  const pageHtml = renderToString(await createApp(pageContext))

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext
  const title = documentProps?.title || 'title'
  const desc = documentProps?.description || 'description'
  const keywords = documentProps?.keywords || 'keywords'

  const isMobile = documentProps?.isMobile

  // See https://vite-plugin-ssr.com/escapeInject
  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <link rel="icon" href="${logoUrl}" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0${
        isMobile ? ', maximum-scale=1.0, user-scalable=no' : ''
      }" />
      <meta name="description" content="${desc}" />
      <meta property="description" content="${desc}" />
      <meta name="og:description" content="${desc}" />
      <meta property="og:description" content="${desc}" />
      <meta name="keywords" content="${keywords}" />
      <meta property="og:url" content="TODO" />
      <meta property="og:site_name" content="TODO" />
      <meta property="og:image" content="TODO">
      <meta name="page_title" content="${title}" />
      <meta property="page_title" content="${title}" />
      <meta name="og:title" content="${title}" />
      <meta property="og:title" content="${title}" />
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
    </body>
  </html>`

  return {
    documentHtml,
    // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection'
    // https://vite-plugin-ssr.com/pageContext#custom
    pageContext: {
      documentProps,
    },
  }
}
