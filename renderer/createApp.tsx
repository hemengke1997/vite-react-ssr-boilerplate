import { StyleProvider } from '@ant-design/cssinjs'
import { I18nextProvider } from 'react-i18next'
import { getI18next } from '@root/locales'
import { isNode } from '@root/shared'
import { GlobalContextProvider } from './useGlobalContext'
import { Layout } from '@/components/Layout'
import '@/assets/style/global.css'

let key = 0

async function createApp(pageContext: PageType.PageContext) {
  const { Page, pageProps, locale } = pageContext

  key = key ^ 1

  const i18n = await getI18next()

  if (isNode()) {
    i18n.changeLanguage(locale)
  }

  return (
    <StyleProvider hashPriority='high' key={key}>
      <GlobalContextProvider props={{ ...pageContext, i18n }}>
        <I18nextProvider i18n={i18n}>
          <Layout>
            <Page {...pageProps} />
          </Layout>
        </I18nextProvider>
      </GlobalContextProvider>
    </StyleProvider>
  )
}

export { createApp }
