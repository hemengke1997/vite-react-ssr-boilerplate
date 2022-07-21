/* ----------------------- 修改本文件后，请执行构建命令 build:server ---------------------- */

import express, { Application } from 'express'
import colors from 'picocolors'
import { renderPage } from 'vite-plugin-ssr'
import { log } from '../scripts/utils'
import { performance } from 'perf_hooks'

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const root = `${__dirname}/..`

async function startServer() {
  const app = express()
  let viteDevServer
  if (isProd) {
    const { default: compression } = await import('compression')
    app.use(compression())
    app.use(express.static(`${root}/dist/client`))
  } else {
    // dev
    global.__vite_server_start_time = performance.now()
    global.__vite_dom_mounted = false
    await import('vite').then(async (vite) => {
      viteDevServer = await vite.createServer({
        root,
        server: {
          middlewareMode: true,
          watch: {
            ignored: ['tsconfig.json'],
          },
        },
      })
      app.use(viteDevServer.middlewares)
    })

    const { createProxyMiddleware } = await import('http-proxy-middleware')
    const prefix = process.env.API_PREFIX || '/'
    const rewriteKey = `^${prefix}`

    app.use(
      prefix,
      createProxyMiddleware({
        target: 'http://webtest.qiyou.cn',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          [rewriteKey]: '/',
        },
      }),
    )
  }

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl
    const pageContextInit = {
      url,
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) return next()
    httpResponse.pipe(res)
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

    console.log(colors.green(`\n 🚀 Server running at ${colors.cyan(`http://localhost:${port}${page}`)}\n`))

    if (!isDev) {
      log.info(`🚩 正在打开默认浏览器...\n`)
      import('./openBrowser').then(({ openBrowser }) => {
        openBrowser(`http://localhost:${port}${page}`, true)
      })
    }
  })
  server.on('error', (error) => {
    if ((error as any).code !== 'EADDRINUSE') {
      throw error
    }
    log.error(`❌ ${error}\n`)

    port = port + 1
    log.info(`🔥 open port ${port} ...\n`)
    // open in other port. current port + 1
    listen(app, port)
  })
}

startServer()
