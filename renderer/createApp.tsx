import type { PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PageContextProvider } from './usePageContext'
import '@/assets/style/global.css'

const AnimateRouteWrapper = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{
        translateX: 8,
        opacity: 0,
      }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: -8, opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

let transitionKey = 0

async function createApp(pageContext: PageType.PageContext & { transitionKey?: number }) {
  const { Page, pageProps } = pageContext

  transitionKey = transitionKey ^ 1

  let Layout

  if (pageProps?.isMobile) {
    Layout = (await import('@/components/mobile/MobileLayout')).MobileLayout
  } else {
    Layout = (await import('@/components/pc/PCLayout')).PCLayout
  }

  const Tpl = Layout

  return (
    <AnimatePresence mode='wait' initial={false}>
      <AnimateRouteWrapper key={transitionKey}>
        <PageContextProvider pageContext={pageContext}>
          <Tpl>
            <Page {...pageProps} />
          </Tpl>
        </PageContextProvider>
      </AnimateRouteWrapper>
    </AnimatePresence>
  )
}

export { createApp }
