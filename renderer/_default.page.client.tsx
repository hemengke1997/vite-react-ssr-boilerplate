import { hydrate } from 'react-dom'

import { createApp } from './createApp'

import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
async function render(pageContext: PageContextBuiltInClient & PageContext) {
  hydrate(await createApp(pageContext), document.getElementById('app')!)
}

export { render }
