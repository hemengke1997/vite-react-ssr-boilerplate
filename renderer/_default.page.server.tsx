import { renderToString } from 'react-dom/server'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import { BASE } from '@root/shared/constant'
import { getLibAssets } from '@root/shared'
import manifestPublicTs from '../publicTs/manifest-publicTs.json'
import { createApp } from './createApp'

export const passToClient = ['pageProps']

export async function render(pageContext: PageContextBuiltIn & PageType.PageContext) {
  const pageHtml = renderToString(await createApp(pageContext))

  const { pageProps } = pageContext
  const { checkPlatform = true, isMobile = false } = pageProps
  const title = pageProps?.title || '奇游加速器'
  const desc = pageProps?.description || '奇游联机宝,奇游电竞加速器,奇游手游加速器,电竞级网络,联机必备'
  const keywords = pageProps?.keywords || '奇游联机宝,奇游电竞加速器,奇游手游加速器,电竞级网络,联机必备'

  const documentHtml = escapeInject/* html */ `<!DOCTYPE html>
  <html lang="zh-CN" is-mobile="${isMobile.toString()}" check-platform='${checkPlatform.toString()}'>
    <head>
      <meta charset="UTF-8" />
      <meta name="renderer" content="webkit" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <link rel="icon" href="${BASE}favicon.ico" />
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
      <script src="${getLibAssets(manifestPublicTs.checkPlatform)}"></script>
      <script src="${getLibAssets(manifestPublicTs.flexible)}"></script>
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
