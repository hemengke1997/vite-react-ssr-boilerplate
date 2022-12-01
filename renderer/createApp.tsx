import { StyleProvider } from '@ant-design/cssinjs'
import type { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { getI18next } from '@root/locales'
import { PageContextProvider } from './usePageContext'
import type { Theme } from './theme'
import { getVarsToken } from './theme'
import { Layout } from '@/components/Layout'
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

export const cssVarsMap: Record<Theme, ReturnType<typeof getVarsToken>> = { dark: {}, light: {} }
const vars = import.meta.glob('@/assets/style/vars/*.css', {
  as: 'raw',
  eager: true,
})

Object.keys(vars).forEach((css) => {
  const cssFileName = /(?<=\/)[^\/]*(?=\.css)/.exec(css)![0]
  const token = getVarsToken(vars[css])
  cssVarsMap[cssFileName] = token
})

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
            <PageContextProvider pageContext={{ ...pageContext, cssVarsMap }}>
              <Layout>
                <Page {...pageProps} />
              </Layout>
            </PageContextProvider>
          </I18nextProvider>
        </AnimateRouteWrapper>
      </AnimatePresence>
    </StyleProvider>
  )
}

export { createApp }
