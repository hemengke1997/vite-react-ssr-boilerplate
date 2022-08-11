import React from 'react'
import type { PageContext } from './types'

import '@/assets/style/index.less'

async function createApp(pageContext: PageContext) {
  const { Page, pageProps, documentProps } = pageContext

  let Layout

  if (documentProps?.isMobile) {
    Layout = (await import('./MobileLayout')).MobileLayout
  } else {
    Layout = (await import('./PCLayout')).PCLayout
  }

  const Tpl = documentProps?.layout || typeof documentProps?.layout === 'undefined' ? Layout : React.Fragment

  return (
    <Tpl>
      <Page {...pageProps} />
    </Tpl>
  )
}

export { createApp }
