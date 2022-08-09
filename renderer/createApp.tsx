import React from 'react'
import type { PageContext } from './types'
import '@/assets/style/index.less'

async function createApp(pageContext: PageContext) {
  const { Page, pageProps, documentProps } = pageContext

  const l = documentProps?.isMobile ? () => import('./MobileLayout') : () => import('./PCLayout')

  const { default: Layout } = await l()

  const Tpl = documentProps?.layout || typeof documentProps?.layout === 'undefined' ? Layout : React.Fragment

  return (
    <Tpl>
      <Page {...pageProps} />
    </Tpl>
  )
}

export { createApp }
