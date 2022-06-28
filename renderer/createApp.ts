import { createSSRApp, defineComponent, h } from 'vue'
import Layout from './Layout.vue'
import WithoutLayout from './WithoutLayout.vue'
import type { PageContext } from './types'
import { setPageContext } from './usePageContext'
import '@/assets/style/tailwind.css'

function createApp(pageContext: PageContext) {
  const { Page, pageProps, documentProps } = pageContext

  const { layout } = documentProps || { layout: true }

  const PageWithLayout = defineComponent({
    render() {
      return h(
        layout ? Layout : WithoutLayout,
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
