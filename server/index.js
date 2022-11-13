/* eslint-disable */
"use strict";


// server/index.ts
import path from "node:path";
import { fileURLToPath } from "node:url";
import normalizeUrl from "normalize-url";
import express from "express";
import colors2 from "picocolors";
import { renderPage } from "vite-plugin-ssr";
import { loadEnv } from "vite";

// shared/index.ts
import normalize from "normalize-path";
function getBase() {
  const base = "/base-url/";
  let mode = "";
  if (import.meta.env?.MODE) {
    mode = import.meta.env.MODE;
  } else if (typeof process !== "undefined") {
    mode = process.env.NODE_ENV;
  }
  return mode === "test" /* test */ ? normalize(`/test${base}`) : base;
}

// scripts/utils.ts
import colors from "picocolors";
var log = {
  info: (str, log2 = true) => {
    return log2 ? console.log(colors.cyan(str)) : colors.cyan(str);
  },
  error: (str, log2 = true) => {
    return log2 ? console.log(colors.red(str)) : colors.cyan(str);
  },
  success: (str, log2 = true) => {
    return log2 ? console.log(colors.green(str)) : colors.cyan(str);
  },
  warn: (str, log2 = true) => {
    return log2 ? console.log(colors.yellow(str)) : colors.cyan(str);
  }
};

// server/index.ts
var dir = path.dirname(fileURLToPath(import.meta.url));
var isDev = process.env.NODE_ENV === "development" /* development */;
var root = `${dir}/..`;
var { VITE_PROXY, VITE_APIURL, VITE_HOST } = loadEnv(process.env.NODE_ENV, root);
var HOST = VITE_HOST;
var PORT = 9527;
async function startServer() {
  const app = express();
  let viteDevServer;
  if (!isDev) {
    const { default: compression } = await import("compression");
    app.use(compression());
    const sirv = (await import("sirv")).default;
    app.use(getBase(), sirv(`${root}/dist/client`, { extensions: [] }));
  } else {
    await import("vite").then(async (vite) => {
      viteDevServer = await vite.createServer({
        root,
        appType: "custom",
        server: {
          middlewareMode: true,
          watch: {
            ignored: ["**/tsconfig.*.json", "**/tsconfig.json"]
          },
          cors: true
        }
      });
      app.use(viteDevServer.middlewares);
    });
    app.set("etag", false);
    app.use((_, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      next();
    });
  }
  const proxy = VITE_PROXY;
  if (proxy) {
    const { createProxyMiddleware } = await import("http-proxy-middleware");
    const rewriteKey = `^${proxy}`;
    app.use(
      proxy,
      createProxyMiddleware({
        target: VITE_APIURL,
        changeOrigin: true,
        pathRewrite: {
          [rewriteKey]: "/"
        }
      })
    );
  }
  app.use((_, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });
  app.get("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      const pageContextInit = {
        urlOriginal: url
      };
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;
      if (httpResponse === null)
        return next();
      const { body, statusCode, contentType } = httpResponse;
      res.status(statusCode).type(contentType).send(body);
    } catch (e) {
      viteDevServer?.ssrFixStacktrace(e);
      res.status(500).end(e.stack);
    }
  });
  const port = Number(process.env.PORT || PORT);
  listen(app, port);
}
function listen(app, _port) {
  let port = _port;
  const server = app.listen(port, HOST);
  server.on("listening", () => {
    const { Start_Page } = process.env;
    const page = Start_Page ? `/${Start_Page}` : "";
    const pathUrl = normalizeUrl(`http://${HOST}:${port}${getBase()}${page}`, { normalizeProtocol: false });
    log.info(`
\u{1F680} [${process.env.NODE_ENV}]: Server running at ${colors2.underline(colors2.blue(pathUrl))}
`);
    if (isDev) {
      log.info(`
\u23F3 open the link above then waiting for vite optimizing...`);
    }
  });
  server.on("error", (error) => {
    if (isDev) {
      if (error.code !== "EADDRINUSE") {
        throw error;
      }
      log.error(`\u274C ${error}
`);
      port = port + 1;
      log.info(`\u{1F525} open port ${port} ...
`);
      listen(app, port);
    }
  });
  process.on("SIGINT", () => {
    server.close(() => {
      process.exit(0);
    });
  });
}
try {
  startServer();
} catch {
  process.exit(1);
}
