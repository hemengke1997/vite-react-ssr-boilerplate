import { hydrate } from 'react-dom'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { createApp } from './createApp'
import { checkoutPlatform } from '@/client/checkPlatform'

async function render(pageContext: PageContextBuiltInClient & PageType.PageContext) {
  const { checkPlatform, isMobile } = pageContext.pageProps || {}

  if (checkPlatform) {
    checkoutPlatform(isMobile)
  }

  hydrate(await createApp(pageContext), document.getElementById('app')!)
}

export { render }
