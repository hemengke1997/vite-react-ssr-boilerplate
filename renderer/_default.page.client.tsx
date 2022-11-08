import { hydrateRoot } from 'react-dom/client'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { createApp } from './createApp'
import { onClientInit } from './client'

async function render(pageContext: PageContextBuiltInClient & PageType.PageContext) {
  hydrateRoot(document.getElementById('app')!, await createApp(pageContext))
  onClientInit()
}

export { render }
