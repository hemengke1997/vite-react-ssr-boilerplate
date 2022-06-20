import { createSSRApp, defineComponent, h } from 'vue'
import Layout from './Layout.vue'
import type { PageContext } from './types'
import { setPageContext } from './usePageContext'
import 'modern-normalize/modern-normalize.css'

function createApp(pageContext: PageContext) {
  const { Page, pageProps, documentProps } = pageContext

  const PageWithLayout = defineComponent({
    render() {
      return h(
        Layout,
        {},
        {
          default() {
            return h(Page, { ...pageProps, ...documentProps } || {})
          },
        },
      )
    },
  })

  const app = createSSRApp(PageWithLayout)

  setPageContext(app, pageContext)

  return app
}

export { createApp }
