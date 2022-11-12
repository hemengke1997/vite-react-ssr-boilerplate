import path from 'node:path'
import { fileURLToPath } from 'node:url'
import normalizeUrl from 'normalize-url'
import express from 'express'
import type { Application } from 'express'
import colors from 'picocolors'
import { renderPage } from 'vite-plugin-ssr'
import type { ViteDevServer } from 'vite'
import { loadEnv } from 'vite'
import { Env } from '@root/shared/env'
import { getBase } from '@root/shared'
import { log } from '../scripts/utils'

const dir = path.dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV === Env.development
const root = `${dir}/..`

const { VITE_PROXY, VITE_APIURL, VITE_HOST } = loadEnv(process.env.NODE_ENV, root) as ImportMetaEnv

const HOST = VITE_HOST

const PORT = 9527

async function startServer() {
  const app = express()
  let viteDevServer: ViteDevServer
  if (!isDev) {
    const { default: compression } = await import('compression')
    app.use(compression())
    const sirv = (await import('sirv')).default
    app.use(getBase(), sirv(`${root}/dist/client`, { extensions: [] }))
  } else {
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
      res.setHeader('Access-Control-Allow-Origin', '*')
      next()
    })
  }

  const proxy = VITE_PROXY

  if (proxy) {
    const { createProxyMiddleware } = await import('http-proxy-middleware')
    const rewriteKey = `^${proxy}`
    app.use(
      proxy,
      createProxyMiddleware({
        target: VITE_APIURL,
        changeOrigin: true,
        pathRewrite: {
          [rewriteKey]: '/',
        },
      }),
    )
  }

  app.use((_, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
  })

  app.get('*', async (req, res, next) => {
    try {
      const url = req.originalUrl
      const pageContextInit = {
        urlOriginal: url,
      }
      const pageContext = await renderPage(pageContextInit)
      const { httpResponse } = pageContext
      if (httpResponse === null) return next()
      const { body, statusCode, contentType } = httpResponse
      res.status(statusCode).type(contentType).send(body)
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

    const pathUrl = normalizeUrl(`http:\/\/${HOST}:${port}${getBase()}${page}`, { normalizeProtocol: false })

    log.info(`\n🚀 [${process.env.NODE_ENV}]: Server running at ${colors.underline(colors.blue(pathUrl))}\n`)

    if (isDev) {
      log.info(`\n⏳ open the link above then waiting for vite optimizing...`)
    }
  })

  server.on('error', (error) => {
    if (isDev) {
      if ((error as any).code !== 'EADDRINUSE') {
        throw error
      }
      log.error(`❌ ${error}\n`)

      port = port + 1
      log.info(`🔥 open port ${port} ...\n`)
      listen(app, port)
    }
  })

  process.on('SIGINT', () => {
    server.close(() => {
      process.exit(0)
    })
  })
}

try {
  startServer()
} catch {
  process.exit(1)
}
