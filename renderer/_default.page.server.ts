import { renderToNodeStream } from 'vue/server-renderer'
import { escapeInject, PageContextBuiltIn } from 'vite-plugin-ssr'
import { PageContext } from './types'
import { createApp } from './createApp'
import logoUrl from '/favicon.ico'

// See https://vite-plugin-ssr.com/passToClient
export const passToClient = ['pageProps', 'urlPathname', 'documentProps']

// See https://vite-plugin-ssr.com/render
export async function render(pageContext: PageContextBuiltIn & PageContext): Promise<any> {
  // See https://v3.cn.vuejs.org/guide/ssr/getting-started.html
  const app = createApp(pageContext)
  const stream = renderToNodeStream(app)

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
      <link rel="icon" href="${logoUrl}" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0${
        isMobile ? ', maximum-scale=1.0, user-scalable=no' : ''
      }" />
      <meta name="description" content="${desc}" />
      <meta name="keywords" content="${keywords}" />
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${stream}</div>
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
