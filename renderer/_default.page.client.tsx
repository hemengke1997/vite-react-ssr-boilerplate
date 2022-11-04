import { hydrate } from 'react-dom'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { createApp } from './createApp'
import { onClientInit } from './client'

async function render(pageContext: PageContextBuiltInClient & PageType.PageContext) {
  hydrate(await createApp(pageContext), document.getElementById('app')!)
  onClientInit()
}

export { render }
