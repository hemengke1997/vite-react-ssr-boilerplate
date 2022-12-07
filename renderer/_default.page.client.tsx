import ReactDOM from 'react-dom/client'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { navigate } from 'vite-plugin-ssr/client/router'
import { isDev } from '@root/shared/env'
import { createApp } from './createApp'
import { onClientInit } from './client'
import 'vite/modulepreload-polyfill'
import '@/assets/style/global.css'

export const clientRouting = true
export const hydrationCanBeAborted = true

let root: ReactDOM.Root

onClientInit()

let transitionKey = 0

export async function render(pageContext: PageContextBuiltInClient & PageType.PageContext) {
  const { redirectTo } = pageContext
  if (redirectTo) {
    navigate(redirectTo)
    return
  }

  const container = document.getElementById('app')!

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, await createApp(pageContext))
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    transitionKey++
    root.render(await createApp(pageContext, transitionKey))
  }

  document.title = pageContext.pageProps?.title || (pageContext.exports?.pageProps as PageType.PageProps)?.title || ''
}

export const prefetchStaticAssets = isDev()
  ? false
  : window.matchMedia('(any-hover: none)').matches
  ? { when: 'VIEWPORT' }
  : { when: 'HOVER' }
