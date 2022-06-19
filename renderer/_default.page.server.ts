import { renderToString } from 'vue/server-renderer'
import { escapeInject, dangerouslySkipEscape, PageContextBuiltIn } from 'vite-plugin-ssr'
import { PageContext } from './types'
import { createApp } from './createApp'

async function render(pageContext: PageContextBuiltIn & PageContext) {
  // see https://v3.cn.vuejs.org/guide/ssr/getting-started.html
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)
}
