// See https://vite-plugin-ssr.com/.page.client.js
import { hydrateRoot } from 'react-dom/client'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { isProdMode } from '@root/shared/env'
import { insert_hm } from '@/client'
import { createApp } from './createApp'

import '@/assets/style/index.less'

async function render(pageContext: PageContextBuiltInClient & PageContext) {
  if (isProdMode()) {
    insert_hm()
  }

  hydrateRoot(document.getElementById('app')!, await createApp(pageContext))
}

export { render }
