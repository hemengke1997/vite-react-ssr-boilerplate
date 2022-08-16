import path from 'node:path'
import { performance } from 'node:perf_hooks'
import { fileURLToPath } from 'node:url'
import express from 'express'
import type { Application } from 'express'
import colors from 'picocolors'
import { renderPage } from 'vite-plugin-ssr'

import type { ViteDevServer } from 'vite'
import { BASE } from '../shared/constant'
import { log } from '../scripts/utils'
const dir = path.dirname(fileURLToPath(import.meta.url))

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const root = `${dir}/..`
const HOST = isDev ? `your.host.com` : `localhost`
const PORT = 9527

async function startServer() {
  const app = express()
  let viteDevServer: ViteDevServer
  if (!isDev) {
    const { default: compression } = await import('compression')
    app.use(compression())
    const sirv = (await import('sirv')).default
    app.use(BASE, sirv(`${root}/dist/client`, { extensions: [] }))
  } else {
    global.__vite_server_start_time = performance.now()
    global.__vite_dom_mounted = false
    await import('vite').then(async (vite) => {
      viteDevServer = await vite.createServer({
        root,
        appType: 'custom',
        server: {
          middlewareMode: true,
          watch: {
            ignored: ['tsconfig.json'],
          },
        },
      })
      app.use(viteDevServer.middlewares)
    })
  }

  const { createProxyMiddleware } = await import('http-proxy-middleware')

  const prefix = process.env.API_PREFIX

  if (prefix) {
    const rewriteKey = `^${prefix}`
    app.use(
      prefix,
      createProxyMiddleware({
        target: isProd ? '/' : 'http://your.proxy.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          [rewriteKey]: '/',
        },
      }),
    )
  }

  app.get('*', async (req, res, next) => {
    try {
      const url = req.originalUrl
      const pageContextInit = {
        url,
      }
      const pageContext = await renderPage(pageContextInit)
      const { httpResponse } = pageContext
      if (!httpResponse) return next()
      httpResponse.pipe(res)
    } catch (e: any) {
      viteDevServer?.ssrFixStacktrace(e)
      res.status(500).end(e.stack)
    }
  })

  const port = Number(process.env.PORT || PORT)

  listen(app, port)
}

function listen(app: Application, _port: number) {
  let port = _port
  const server = app.listen(port, HOST)
  server.on('listening', () => {
    const { npm_config_page } = process.env
    const page = npm_config_page ? `/${npm_config_page}` : ''

    console.log(colors.green(`\n 🚀 Server running at ${colors.cyan(`http://${HOST}:${port}${BASE}${page}`)}\n`))

    if (isDev) {
      log.info(`🚩 正在打开默认浏览器...\n`)
      import('./openBrowser').then(({ openBrowser }) => {
        openBrowser(`http://${HOST}:${port}${BASE}${page}`, true)
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
    listen(app, port)
  })
}

startServer()
