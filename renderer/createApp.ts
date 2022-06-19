import { createSSRApp, defineComponent, h } from 'vue'
import Layout from './Layout.vue'
import type { PageContext } from './types'
import { setPageContext } from './usePageContext'

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = defineComponent({
    render() {
      return h(
        Layout,
        {},
        {
          default() {
            return h(Page, pageProps || {})
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
