import React from 'react'
// import { ReactStreaming } from 'react-streaming/client'
import type { PageContext } from './types'
import { SWRConfig } from 'swr'

async function createApp(pageContext: PageContext) {
  const { Page, pageProps, documentProps } = pageContext

  const l = documentProps?.isMobile ? () => import('./MobileLayout') : () => import('./PCLayout')

  const { default: Layout } = await l()

  const Tpl = documentProps?.layout || typeof documentProps?.layout === 'undefined' ? Layout : React.Fragment

  return (
    // <ReactStreaming>
    <SWRConfig>
      <Tpl>
        <Page {...pageProps} />
      </Tpl>
    </SWRConfig>

    // </ReactStreaming>
  )
}

export { createApp }
