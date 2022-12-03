import type { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { StyleProvider } from '@ant-design/cssinjs'
import { getI18next } from '@root/locales'
import { GlobalContextProvider, useGlobalContext } from './global/useGlobalContext'
import { Layout } from '@/components/Layout'

const I18nextContainer: FC = () => {
  const { i18n, pageProps, Page } = useGlobalContext()

  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </I18nextProvider>
  )
}

async function createApp(pageContext: PageType.PageContext, transitionKey = 0) {
  const { locale } = pageContext

  const i18n = await getI18next()

  i18n.changeLanguage(locale)

  return (
    <StyleProvider hashPriority='high'>
      <GlobalContextProvider props={{ ...pageContext, locale, i18n, key: transitionKey }}>
        <I18nextContainer />
      </GlobalContextProvider>
    </StyleProvider>
  )
}

export { createApp }
