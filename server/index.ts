import express from 'express'
import compression from 'compression'
import colors from 'picocolors'
import { createPageRenderer } from 'vite-plugin-ssr'
import { openBrowser } from './openBrowser'

const isProd = process.env.NODE_ENV === 'production' || true
const root = `${__dirname}/..`

async function startServer() {
  const app = express()
  app.use(compression())

  let viteDevServer
  if (isProd) {
    // See https://expressjs.com/zh-cn/starter/static-files.html
    // app.use(express.static(`${root}/dist/subpage/client`))
    app.use(express.static(`${root}/dist/client`))
  } else {
    // dev
    await import('vite').then(async (vite) => {
      viteDevServer = await vite.createServer({
        root,
        server: {
          middlewareMode: 'ssr',
        },
      })
      app.use(viteDevServer.middlewares)
    })
  }

  // See https://vite-plugin-ssr.com/createPageRenderer
  const renderPage = createPageRenderer({
    viteDevServer,
    isProduction: isProd,
    root,
    // outDir: 'dist/subpage',
    outDir: 'dist',
  })

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl

    // https://vite-plugin-ssr.com/pageContext#custom
    const pageContextInit = {
      url,
    }
    const pageContext = await renderPage(pageContextInit)

    if (pageContext.errorWhileRendering) {
      console.log(pageContext.errorWhileRendering, 'errorWhileRendering')
    }

    const { httpResponse } = pageContext

    if (!httpResponse) return next()
    const { body, statusCode, contentType } = httpResponse

    res.status(statusCode).type(contentType).send(body)
  })

  const port = process.env.PORT || 3000

  // See http://expressjs.com/zh-cn/api.html#app.listen
  app.listen(port)

  const { npm_config_page } = process.env
  const page = npm_config_page ? '/' + npm_config_page : ''

  console.log(colors.green(`Server running at ${colors.cyan(`http://localhost:${port}${page}`)}`))
  openBrowser(`http://localhost:${port}${page}`, true)
}

startServer()
