// See https://vite-plugin-ssr.com/.page.client.js
import { hydrateRoot } from 'react-dom/client'
import { getPage } from 'vite-plugin-ssr/client'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { isProdMode } from '@root/shared/env'
import { insert_hm } from '@/client'
import { createApp } from './createApp'

import '@/assets/style/tailwind.css'

async function hydrate() {
  if (isProdMode()) {
    insert_hm()
  }
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  // See https://vite-plugin-ssr.com/getPage
  // TODO: migrate to vps.4
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>()

  hydrateRoot(document.getElementById('app')!, await createApp(pageContext))
}

hydrate()
