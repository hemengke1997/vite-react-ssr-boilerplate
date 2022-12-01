import { StyleProvider } from '@ant-design/cssinjs'
import type { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { getI18next } from '@root/locales'
import { GlobalContextProvider } from './useGlobalContext'
import { Layout } from '@/components/Layout'
import '@/assets/style/global.css'

const AnimateRouteWrapper = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{
        x: 8,
        opacity: 0,
        pointerEvents: 'none',
      }}
      animate={{
        x: 0,
        opacity: 1,
        pointerEvents: 'initial',
      }}
      exit={{
        x: -8,
        opacity: 0,
        pointerEvents: 'none',
      }}
      transition={{ duration: 0.15 }}
      onAnimationStart={() => {
        document.body.style.overflowX = 'hidden'
      }}
      onAnimationComplete={() => {
        document.body.style.overflowX = ''
      }}
    >
      {children}
    </motion.div>
  )
}

let transitionKey = 0

async function createApp(pageContext: PageType.PageContext) {
  const { Page, pageProps, locale } = pageContext

  transitionKey = transitionKey ^ 1

  const i18n = await getI18next()

  i18n.changeLanguage(locale)

  return (
    <StyleProvider hashPriority='high'>
      <AnimatePresence mode='wait' initial={false}>
        <AnimateRouteWrapper key={transitionKey}>
          <I18nextProvider i18n={i18n}>
            <GlobalContextProvider pageContext={pageContext}>
              <Layout>
                <Page {...pageProps} />
              </Layout>
            </GlobalContextProvider>
          </I18nextProvider>
        </AnimateRouteWrapper>
      </AnimatePresence>
    </StyleProvider>
  )
}

export { createApp }
