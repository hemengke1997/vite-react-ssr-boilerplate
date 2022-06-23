// See https://vite-plugin-ssr.com/.page.client.js

import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './createApp'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  // See https://vite-plugin-ssr.com/getPage
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>()
  const app = createApp({
    ...pageContext,
  })
  app.mount('#app')
}

hydrate()
