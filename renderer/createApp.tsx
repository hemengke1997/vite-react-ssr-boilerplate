import type { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { camelCase } from 'lodash-es'
import { getI18next } from '@root/locales'
import { PageContextProvider } from './usePageContext'
import '@/assets/style/global.css'
import cssVars from '@/assets/style/vars.css'

let token: Record<string, string>
const getVarsToken = () => {
  if (token) return token
  token = {}
  const varsList = cssVars.match(/--[\w|-]+:[^;]+/g) || []

  varsList.forEach((item) => {
    const k = camelCase(item.split(':')[0]?.trim())

    const v = item.split(':')[1]?.trim()
    token[k] = v
  })

  return token
}

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

async function createApp(pageContext: PageType.PageContext) {
  const { Page, pageProps, locale } = pageContext

  transitionKey = transitionKey ^ 1

  let Layout

  if (pageProps?.isMobile) {
    Layout = (await import('@/components/mobile/MobileLayout')).MobileLayout
  } else {
    Layout = (await import('@/components/pc/PCLayout')).PCLayout
  }

  const Tpl = Layout

  const i18n = await getI18next()

  i18n.changeLanguage(locale)

  const token = getVarsToken()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <AnimateRouteWrapper key={transitionKey}>
        <I18nextProvider i18n={i18n}>
          <PageContextProvider pageContext={{ ...pageContext, token }}>
            <Tpl>
              <Page {...pageProps} />
            </Tpl>
          </PageContextProvider>
        </I18nextProvider>
      </AnimateRouteWrapper>
    </AnimatePresence>
  )
}

export { createApp }
