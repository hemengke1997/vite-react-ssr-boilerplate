import express from 'express'

import { renderToString } from 'vue/server-renderer'
// client.js
import { createApp } from './app.js'

const server = express()

server.use(express.static('.'))

server.get('/', (req, res) => {
  const app = createApp()
  renderToString(app).then((html) => {
    res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Vue SSR Example</title>
    </head>
    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
        }
      }
    </script>
    <script type="module" src="/client.js"></script>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>
  `)
  })
})

server.listen(8080, () => {
  console.log('服务启动咯')
})
