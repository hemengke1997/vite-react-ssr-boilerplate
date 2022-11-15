import path from 'node:path'
import { fileURLToPath } from 'node:url'
import readline from 'node:readline'
import normalizeUrl from 'normalize-url'
import express from 'express'
import type { Application } from 'express'
import colors from 'picocolors'
import { renderPage } from 'vite-plugin-ssr'
import type { ViteDevServer } from 'vite'
import { loadEnv } from 'vite'
import { Env } from '@root/shared/env'
import { getBase } from '@root/shared'
import { wrapperEnv } from '@root/config/vite/utils/helper'
import { log } from '../scripts/utils'
import { legacyHtml } from './legacy'

function clearScreen() {
  const repeatCount = process.stdout.rows - 2
  const blank = repeatCount > 0 ? '\n'.repeat(repeatCount) : ''
  console.log(blank)
  readline.cursorTo(process.stdout, 0, 0)
  readline.clearScreenDown(process.stdout)
}

const dir = path.dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV === Env.development
// const isProd = process.env.NODE_ENV === Env.production
const root = `${dir}/..`

const env = loadEnv(process.env.NODE_ENV, root) as ImportMetaEnv
const { VITE_PROXY, VITE_APIURL, VITE_HOST } = env

wrapperEnv(env)

const HOST = VITE_HOST

const PORT = 9527

async function startServer() {
  const app = express()
  let viteDevServer: ViteDevServer
  if (isDev) {
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
      res.setHeader('Cache-Control', 'no-store')
      next()
    })
  } else {
    const { default: compression } = await import('compression')
    app.use(compression())
    const sirv = (await import('sirv')).default
    app.use(
      getBase(),
      sirv(`${root}/dist/client`, {
        extensions: [],
        etag: true,
      }),
    )
  }

  app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
  })

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

  // support html
  app.use((req, _, next) => {
    const url = req.originalUrl
    const isHtml = /\.html?$/gi
    if (isHtml.test(url)) {
      req.originalUrl = url.replace(isHtml, '')
    }
    next()
  })

  app.get('*', async (req, res, next) => {
    try {
      const url = req.originalUrl

      const pageContextInit = {
        urlOriginal: url,
      }
      const pageContext: any = await renderPage(pageContextInit)

      const env = process.env.NODE_ENV

      const { httpResponse } = pageContext

      if (httpResponse === null) return next()
      const { statusCode, contentType } = httpResponse

      // if (statusCode === 404) {
      //   res.status(statusCode).redirect('https://www.google.com')
      //   return
      // }

      let html = httpResponse.body

      if (!env || env !== 'development') {
        html = await legacyHtml(pageContext, html)
      }

      res.status(statusCode).type(contentType).send(html)
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

    clearScreen()

    log.info(`\n🚀 [${process.env.NODE_ENV}]: Server running at ${colors.underline(colors.blue(pathUrl))}\n`)
  })

  server.on('error', (error) => {
    clearScreen()

    if ((error as any).code !== 'EADDRINUSE') {
      throw error
    }

    log.error(`❌ ${error}\n`)
    port = port + 1
    log.info(`🔥 open port ${port} ...\n`)
    listen(app, port)
  })

  if (!isDev) {
    process.on('SIGINT', () => {
      server.close(() => {
        process.exit(0)
      })
    })
  }
}

try {
  startServer()
} catch {
  process.exit(1)
}
