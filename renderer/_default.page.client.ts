// See https://vite-plugin-ssr.com/.page.client.js

import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './createApp'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { isProdMode } from '@root/shared/env'
import { insert_hm } from '@/client'

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  // See https://vite-plugin-ssr.com/getPage
  // TODO: migrate to vps.4
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>()

  if (isProdMode()) {
    insert_hm()
  }

  const app = createApp({
    ...pageContext,
  })
  app.mount('#app')
}

hydrate()
