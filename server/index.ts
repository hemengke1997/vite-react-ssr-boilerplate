import path from 'node:path'
import { performance } from 'node:perf_hooks'
import { fileURLToPath } from 'node:url'
import normalize from 'normalize-url'
import express from 'express'
import type { Application } from 'express'
import colors from 'picocolors'
import { renderPage } from 'vite-plugin-ssr'
import type { ViteDevServer } from 'vite'
import { loadEnv } from 'vite'
import { BASE } from '@root/shared/constant'
import { Env } from '@root/shared/env'
import { log } from '../scripts/utils'

const dir = path.dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV === Env.development
const root = `${dir}/..`

const { VITE_APIPREFIX } = loadEnv(process.env.NODE_ENV, process.cwd()) as ImportMetaEnv

const HOST = `localhost`
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
            ignored: ['**/tsconfig.*.json', '**/tsconfig.json'],
          },
          cors: true,
        },
      })
      app.use(viteDevServer.middlewares)
    })
    app.set('etag', false)
    app.use((_, res, next) => {
      res.set('Cache-Control', 'no-store')
      res.setHeader('Access-Control-Allow-Origin', '*')
      next()
    })
  }

  const prefix = VITE_APIPREFIX
  if (prefix) {
    const { createProxyMiddleware } = await import('http-proxy-middleware')
    const rewriteKey = `^${prefix}`
    app.use(
      prefix,
      createProxyMiddleware({
        target: 'localhost', // TODO: fill your target
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
        urlOriginal: url,
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
    const { Start_Page } = process.env
    const page = Start_Page ? `/${Start_Page}` : ''

    const pathUrl = normalize(`http:\/\/${HOST}:${port}${BASE}${page}`, { normalizeProtocol: false })

    log.info(`\n🚀 [${process.env.NODE_ENV}]: Server running at ${colors.underline(colors.blue(pathUrl))}\n`)

    if (isDev) {
      log.info(`\n⏳ waiting for vite optimizing...`)
    }
  })
  server.on('error', (error) => {
    if ((error as any).code !== 'EADDRINUSE') {
      throw error
    }
    log.error(`\n❌ ${error}\n`)

    port = port + 1
    log.info(`🔥 open port ${port} ...\n`)
    listen(app, port)
  })
}

try {
  startServer()
} catch {
  process.exit(1)
}
