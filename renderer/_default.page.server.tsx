import { renderToString } from 'react-dom/server'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import { getBase, getLibAssets } from '@root/shared'
import { isProdMode } from '@root/shared/env'
import manifestPublicTs from '../publicTypescript/manifest.json'
import { createApp } from './createApp'

function setupVconsole(isMobile?: boolean) {
  if (!isProdMode() && isMobile) {
    return escapeInject/* html */ `
    <script src="https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js"></script>
    <script>
      var vConsole = new window.VConsole();
    </script>`
  }
  return escapeInject``
}

export const passToClient = ['pageProps']

export async function render(pageContext: PageContextBuiltIn & PageType.PageContext) {
  const pageHtml = renderToString(await createApp(pageContext))

  const { pageProps } = pageContext
  const { checkPlatform = true, isMobile = false } = pageProps
  const title = pageProps?.title || 't'
  const desc = pageProps?.description || 'd'
  const keywords = pageProps?.keywords || 'k'

  const documentHtml = escapeInject/* html */ `<!DOCTYPE html>
  <html lang="zh-CN" is-mobile="${String(isMobile)}" check-platform='${String(checkPlatform)}'>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="Cache-Control" content="no-store">
      <meta name="renderer" content="webkit" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <link rel="icon" href="${getBase()}favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0${
        isMobile ? ', maximum-scale=1.0, user-scalable=no, viewport-fit=cover' : ''
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
      <script src="${getLibAssets(manifestPublicTs.initGlobalVars)}"></script>
      <script src="${getLibAssets(manifestPublicTs.flexible)}"></script>
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(pageHtml)}</div>


      ${setupVconsole(isMobile)}
    </body>
  </html>`

  return {
    documentHtml,
    pageContext: {
      pageProps,
    },
  }
}
