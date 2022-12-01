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
import { injectEnv } from '@root/config/vite/utils/helper'
import i18nextMiddleware from 'i18next-http-middleware'
import { getI18next } from '@root/locales'
import cookieParser from 'cookie-parser'
import { log } from '../scripts/utils'
import { legacyHtml } from './legacy'

const dir = path.dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV === Env.development
const root = `${dir}/..`

const env = loadEnv(process.env.NODE_ENV, root) as ImportMetaEnv
const { VITE_PROXY, VITE_APIURL, VITE_HOST } = env

injectEnv(env)

const HOST = VITE_HOST

const PORT = Number(process.env.PORT) || 9527

let port = PORT

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
            ignored: ['**/tsconfig.*'],
          },
          cors: true,
        },
      })

      app.use(viteDevServer.middlewares)
    })
    app.set('etag', false)
    app.use((_, res, next) => {
      res.setHeader('Cache-Control', ['no-store', 'no-cache'])
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

  app.use(cookieParser())

  // support html
  app.use((req, _, next) => {
    const url = req.originalUrl
    req.originalUrl = url.replace(/(\.html?)$/gi, '')
    next()
  })

  // i18next
  app.use(i18nextMiddleware.handle(await getI18next(true)))

  app.get('*', async (req, res, next) => {
    try {
      const url = req.originalUrl

      const pageContextInit = {
        urlOriginal: url,
        i18n: req.i18n,
      }

      const pageContext = await renderPage<PageType.PageContext, {}>(pageContextInit)

      if (pageContext.redirectTo) {
        return res.redirect(307, pageContext.redirectTo)
      }

      const { NODE_ENV } = process.env

      const { httpResponse } = pageContext

      if (httpResponse === null) return next()
      const { statusCode, contentType } = httpResponse

      if (statusCode === 404 && NODE_ENV === 'production') {
        // if you want 404 redirect to some url
        return res.status(statusCode).redirect('https://www.google.com')
      }

      let html = httpResponse.body

      if (NODE_ENV && NODE_ENV !== 'development') {
        html = await legacyHtml(pageContext, html)
      }

      res.status(statusCode).type(contentType).send(html)
    } catch (e: any) {
      viteDevServer?.ssrFixStacktrace(e)
      res.status(500).end(e.stack)
    }
  })

  listen(app)
}

function listen(app: Application) {
  const server = app.listen(port, HOST)

  server.on('listening', () => {
    const { START_PAGE } = process.env
    const page = START_PAGE ? `/${START_PAGE}` : ''

    const pathUrl = normalizeUrl(`http:\/\/${HOST}:${port}${getBase()}${page}`, { normalizeProtocol: false })

    log.info(`\n🚀 [${process.env.NODE_ENV}]: Server running at ${colors.underline(colors.blue(pathUrl))}\n`)
  })

  server.on('error', (error) => {
    if ((error as any).code !== 'EADDRINUSE') {
      throw error
    }

    log.error(`❌ ${error}\n`)
    port = port + 1
    log.info(`🔥 open port ${port} ...\n`)
    listen(app)
  })

  if (!isDev) {
    process.on('SIGINT', () => {
      server.close(() => {
        process.exit(0)
      })
    })
  }
}

export function clearScreen() {
  const repeatCount = process.stdout.rows - 2
  const blank = repeatCount > 0 ? '\n'.repeat(repeatCount) : ''
  console.log(blank)
  readline.cursorTo(process.stdout, 0, 0)
  readline.clearScreenDown(process.stdout)
}

try {
  startServer()
} catch {
  process.exit(1)
}
