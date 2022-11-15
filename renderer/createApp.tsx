import { PageContextProvider } from './usePageContext'
import '@/assets/style/global.css'

async function createApp(pageContext: PageType.PageContext) {
  const { Page, pageProps } = pageContext

  let Layout

  if (pageProps?.isMobile) {
    Layout = (await import('@/components/mobile/MobileLayout')).MobileLayout
  } else {
    Layout = (await import('@/components/pc/PCLayout')).PCLayout
  }

  const Tpl = Layout

  return (
    <PageContextProvider pageContext={pageContext}>
      <Tpl>
        <Page {...pageProps} />
      </Tpl>
    </PageContextProvider>
  )
}

export { createApp }
