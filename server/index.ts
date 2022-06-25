import express, { Application } from 'express'
import compression from 'compression'
import colors from 'picocolors'
import { createPageRenderer } from 'vite-plugin-ssr'
import { openBrowser } from './openBrowser'
import { log } from '../scripts/utils'

const isProd = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

async function startServer() {
  const app = express()
  app.use(compression())

  let viteDevServer
  if (isProd) {
    // See https://expressjs.com/zh-cn/starter/static-files.html
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
    outDir: 'dist',
  })

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl

    // https://vite-plugin-ssr.com/pageContext#custom
    const pageContextInit = {
      url,
    }
    const pageContext = await renderPage(pageContextInit)

    const { httpResponse } = pageContext

    if (!httpResponse) return next()
    const { statusCode, contentType } = httpResponse
    const stream = await httpResponse.getNodeStream()

    res.status(statusCode).type(contentType)
    stream.pipe(res)
  })

  const port = Number(process.env.PORT || 3001)

  listen(app, port)
}

function listen(app: Application, _port: number) {
  let port = _port
  const server = app.listen(port)
  server.on('listening', () => {
    const { npm_config_page } = process.env
    const page = npm_config_page ? '/' + npm_config_page : ''

    console.log(colors.green(`🚀 Server running at ${colors.cyan(`http://localhost:${port}${page}`)}`))
    openBrowser(`http://localhost:${port}${page}`, true)
  })
  server.on('error', (error) => {
    if ((error as any).code !== 'EADDRINUSE') {
      throw error
    }
    log.error(`❌ ${error}`)

    port = port + 1
    log.info(`🔥 open port ${port} ...`)
    // open in other port. current port + 1
    listen(app, port)
  })
}

startServer()
