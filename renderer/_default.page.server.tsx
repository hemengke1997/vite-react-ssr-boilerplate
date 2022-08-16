import { renderToString } from 'react-dom/server'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'

import { createApp } from './createApp'
import type { PageContext } from './types'

export const passToClient = ['pageProps', 'documentProps']

export async function render(pageContext: PageContextBuiltIn & PageContext): Promise<any> {
  const pageHtml = renderToString(await createApp(pageContext))

  const { documentProps } = pageContext
  const title = documentProps?.title || 'title'
  const desc = documentProps?.description || 'description'
  const keywords = documentProps?.keywords || 'keywords'

  const isMobile = documentProps?.isMobile

  const documentHtml = escapeInject/* html */ `<!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <link rel="icon" href="/favicon.ico" />
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
    pageContext: {
      documentProps,
    },
  }
}
