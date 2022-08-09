import { hydrate } from 'react-dom'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { createApp } from './createApp'

async function render(pageContext: PageContextBuiltInClient & PageContext) {
  hydrate(await createApp(pageContext), document.getElementById('app')!)
}

export { render }
