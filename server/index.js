/* eslint-disable prettier/prettier */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// scripts/utils.ts
var import_picocolors, log;
var init_utils = __esm({
  "scripts/utils.ts"() {
    import_picocolors = __toESM(require("picocolors"));
    log = {
      info: (str, log2 = true) => {
        return log2 ? console.log(import_picocolors.default.cyan(str)) : import_picocolors.default.cyan(str);
      },
      error: (str, log2 = true) => {
        return log2 ? console.log(import_picocolors.default.red(str)) : import_picocolors.default.cyan(str);
      },
      success: (str, log2 = true) => {
        return log2 ? console.log(import_picocolors.default.green(str)) : import_picocolors.default.cyan(str);
      },
      warn: (str, log2 = true) => {
        return log2 ? console.log(import_picocolors.default.yellow(str)) : import_picocolors.default.cyan(str);
      }
    };
  }
});

// server/openBrowser.ts
var openBrowser_exports = {};
__export(openBrowser_exports, {
  openBrowser: () => openBrowser
});
function openBrowser(url, opt) {
  const browser = typeof opt === "string" ? opt : process.env.BROWSER || "";
  if (browser.toLowerCase().endsWith(".js")) {
    return executeNodeScript(browser, url);
  } else if (browser.toLowerCase() !== "none") {
    return startBrowserProcess(browser, url);
  }
  return false;
}
function executeNodeScript(scriptPath, url) {
  const extraArgs = process.argv.slice(2);
  const child = (0, import_cross_spawn.default)(process.execPath, [scriptPath, ...extraArgs, url], {
    stdio: "inherit"
  });
  child.on("close", (code) => {
    if (code !== 0) {
      log.error(`
The script specified as BROWSER environment variable failed.

${import_picocolors2.default.cyan(scriptPath)} exited with code ${code}.`);
    }
  });
  return true;
}
function startBrowserProcess(browser, url) {
  const shouldTryOpenChromeWithAppleScript = process.platform === "darwin" && (browser === "" || browser === OSX_CHROME);
  if (shouldTryOpenChromeWithAppleScript) {
    try {
      (0, import_child_process.execSync)('ps cax | grep "Google Chrome"');
      (0, import_child_process.execSync)('osascript openChrome.applescript "' + encodeURI(url) + '"', {
        cwd: __dirname,
        stdio: "ignore"
      });
      return true;
    } catch (err) {
    }
  }
  if (process.platform === "darwin" && browser === "open") {
    browser = void 0;
  }
  try {
    const options = browser ? { app: { name: browser } } : {};
    (0, import_open.default)(url, options).catch(() => {
    });
    log.success(`\u2705 open success
`);
    return true;
  } catch (err) {
    return false;
  }
}
var import_child_process, import_open, import_cross_spawn, import_picocolors2, OSX_CHROME;
var init_openBrowser = __esm({
  "server/openBrowser.ts"() {
    import_child_process = require("child_process");
    import_open = __toESM(require("open"));
    import_cross_spawn = __toESM(require("cross-spawn"));
    import_picocolors2 = __toESM(require("picocolors"));
    init_utils();
    OSX_CHROME = "google chrome";
  }
});

// server/index.ts
var import_express = __toESM(require("express"));
var import_picocolors3 = __toESM(require("picocolors"));
var import_vite_plugin_ssr = require("vite-plugin-ssr");
init_utils();
var import_perf_hooks = require("perf_hooks");
var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";
var root = `${__dirname}/..`;
async function startServer() {
  const app = (0, import_express.default)();
  let viteDevServer;
  if (isProd) {
    const { default: compression } = await import("compression");
    app.use(compression());
    app.use(import_express.default.static(`${root}/dist/client`));
  } else {
    global.__vite_server_start_time = import_perf_hooks.performance.now();
    global.__vite_dom_mounted = false;
    await import("vite").then(async (vite) => {
      viteDevServer = await vite.createServer({
        root,
        server: {
          middlewareMode: true,
          watch: {
            ignored: ["tsconfig.json"]
          }
        }
      });
      app.use(viteDevServer.middlewares);
    });
    const { createProxyMiddleware } = await import("http-proxy-middleware");
    const prefix = process.env.API_PREFIX || "/api";
    const rewriteKey = `^${prefix}`;
    app.use(prefix, createProxyMiddleware({
      target: "http://webtest.qiyou.cn",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        [rewriteKey]: "/"
      }
    }));
  }
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;
    const pageContextInit = {
      url
    };
    const pageContext = await (0, import_vite_plugin_ssr.renderPage)(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse)
      return next();
    httpResponse.pipe(res);
  });
  const port = Number(process.env.PORT || 3001);
  listen(app, port);
}
function listen(app, _port) {
  let port = _port;
  const server = app.listen(port);
  server.on("listening", () => {
    const { npm_config_page } = process.env;
    const page = npm_config_page ? "/" + npm_config_page : "";
    console.log(import_picocolors3.default.green(`
 \u{1F680} Server running at ${import_picocolors3.default.cyan(`http://localhost:${port}${page}`)}
`));
    if (!isDev) {
      log.info(`\u{1F6A9} \u6B63\u5728\u6253\u5F00\u9ED8\u8BA4\u6D4F\u89C8\u5668...
`);
      Promise.resolve().then(() => (init_openBrowser(), openBrowser_exports)).then(({ openBrowser: openBrowser2 }) => {
        openBrowser2(`http://localhost:${port}${page}`, true);
      });
    }
  });
  server.on("error", (error) => {
    if (error.code !== "EADDRINUSE") {
      throw error;
    }
    log.error(`\u274C ${error}
`);
    port = port + 1;
    log.info(`\u{1F525} open port ${port} ...
`);
    listen(app, port);
  });
}
startServer();
