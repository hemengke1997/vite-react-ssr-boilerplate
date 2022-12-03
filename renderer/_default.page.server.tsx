import { renderToString } from 'react-dom/server'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import { getBase, getLibAssets } from '@root/shared'
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'
import manifest from '@root/publicTypescript/manifest.json'
import { isProd } from '@root/shared/env'
import { createApp } from './createApp'

function setupVconsole(force?: boolean): ReturnType<typeof escapeInject> {
  if (force === false) return escapeInject``
  if (!isProd() || force) {
    return escapeInject/* html */ `
    <script src="https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js"></script>
    <script>
      var vConsole = new window.VConsole();
    </script>`
  }
  return escapeInject``
}

export const passToClient = ['pageProps', 'redirectTo', 'locale']

export async function render(pageContext: PageContextBuiltIn & PageType.PageContext) {
  const { pageProps, locale, redirectTo } = pageContext
  const cache = createCache()
  const pageHtml = renderToString(<StyleProvider cache={cache}>{await createApp(pageContext)}</StyleProvider>)
  const styleText = `${extractStyle(cache)}`

  const { vconsole } = pageProps
  const title = pageProps?.title || 'vite-react-ssr-boilerplate'
  const desc = pageProps?.description || 'description'
  const keywords = pageProps?.keywords || 'keywords'

  const documentHtml = escapeInject/* html */ `<!DOCTYPE html>
  <html lang="${locale}">
    <head>
      <meta charset="UTF-8" />
      <meta name="renderer" content="webkit" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <link rel="icon" href="${getBase()}favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      <meta name="description" content="${desc}" />
      <meta property="description" content="${desc}" />
      <meta name="og:description" content="${desc}" />
      <meta property="og:description" content="${desc}" />
      <meta name="keywords" content="${keywords}" />
      <meta name="page_title" content="${title}" />
      <meta property="page_title" content="${title}" />
      <meta name="og:title" content="${title}" />
      <meta property="og:title" content="${title}" />
      ${dangerouslySkipEscape(styleText)}
      
      <script src="${getLibAssets(manifest.disableAnimation)}"></script>
      <script src="${getLibAssets(manifest.theme)}"></script>
      <script src="${getLibAssets(manifest.direction)}"></script>

      <title>${title}</title>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(pageHtml)}</div>


      ${setupVconsole(vconsole)}
    </body>
  </html>`

  return {
    documentHtml,
    pageContext: {
      pageProps,
      redirectTo,
      locale,
    },
  }
}
