function __vite_legacy_guard() {
  import("data:text/javascript,");
}
;
import { i as isCallable, h as higherFirst, a as assert, s as slice, b as isErrorPageId, c as assertUsage, d as hasProp, e as assertWarning, p as parseUrl, m as makeFirst, f as isObject, o as objectAssign, _ as __vite_glob_2_0, g as __vite_glob_3_0, j as __vite_glob_3_1, k as __vite_glob_4_0, l as __vite_glob_4_1, n as setPageFiles, q as errorPrefix, r as getProjectError, t as getGlobalObject, u as getCurrentUrl, v as getAllPageIdFilesServerSide, w as releasePageContextCommon, x as getPageContextSerializedInHtml, y as loadPageFilesClientSide, z as getErrorPageId, A as getHook, B as parse, C as assertBaseUrl, D as getPageFilesAll, E as getPageFilesClientSide, F as isParsable, G as assertInfo, H as isErrorFetchingStaticAssets, I as assertHook, J as assertRenderHook } from "./assertRenderHook.8766fbcf.js";
import { _ as __vitePreload } from "./preload-helper.e1a242f9.js";
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  return value.constructor.name === "Object";
}
function stringifyStringArray(stringList) {
  return "[" + stringList.map((str) => "'" + str + "'").join(", ") + "]";
}
function hasPropertyGetter(obj, prop) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  return !!descriptor && !("value" in descriptor) && !!descriptor.get;
}
function isObjectWithKeys(obj, keys) {
  if (!isPlainObject(obj)) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      return false;
    }
  }
  return true;
}
function isPromise(val) {
  return typeof val === "object" && val !== null && "then" in val && isCallable(val.then);
}
function deduceRouteStringFromFilesystemPath(pageId, filesystemRoots) {
  const filesystemRootsMatch = filesystemRoots.filter(({ filesystemRoot }) => pageId.startsWith(filesystemRoot)).sort(higherFirst(({ filesystemRoot }) => filesystemRoot.length));
  const fsRoot = filesystemRootsMatch[0];
  let filesystemRoute;
  if (fsRoot) {
    const { filesystemRoot, routeRoot } = fsRoot;
    const debugInfo = { pageId, filesystemRoot, routeRoot };
    assert(routeRoot.startsWith("/") && pageId.startsWith("/") && filesystemRoot.startsWith("/"), debugInfo);
    assert(pageId.startsWith(filesystemRoot), debugInfo);
    if (filesystemRoot !== "/") {
      assert(!filesystemRoot.endsWith("/"), debugInfo);
      filesystemRoute = slice(pageId, filesystemRoot.length, 0);
    } else {
      filesystemRoute = pageId;
    }
    assert(filesystemRoute.startsWith("/"), debugInfo);
    filesystemRoute = routeRoot + (routeRoot.endsWith("/") ? "" : "/") + slice(filesystemRoute, 1, 0);
  } else {
    filesystemRoute = pageId;
  }
  assert(filesystemRoute.startsWith("/"));
  filesystemRoute = filesystemRoute.split("/").filter((dir) => dir !== "pages" && dir !== "src" && dir !== "index").join("/");
  assert(!filesystemRoute.includes(".page."));
  assert(!filesystemRoute.endsWith("."));
  if (filesystemRoute.endsWith("/index")) {
    filesystemRoute = slice(filesystemRoute, 0, -"/index".length);
  }
  if (filesystemRoute === "") {
    filesystemRoute = "/";
  }
  assert(filesystemRoute.startsWith("/"));
  assert(!filesystemRoute.endsWith("/") || filesystemRoute === "/");
  return filesystemRoute;
}
async function loadPageRoutes(pageContext) {
  await Promise.all(pageContext._pageFilesAll.filter((p) => p.fileType === ".page.route").map((p) => {
    var _a;
    return (_a = p.loadFile) === null || _a === void 0 ? void 0 : _a.call(p);
  }));
  const { onBeforeRouteHook, filesystemRoots } = getGlobalHooks(pageContext);
  const pageRoutes = getPageRoutes(filesystemRoots, pageContext);
  return { pageRoutes, onBeforeRouteHook };
}
function getPageRoutes(filesystemRoots, pageContext) {
  const pageRoutes = [];
  pageContext._allPageIds.filter((pageId) => !isErrorPageId(pageId)).forEach((pageId) => {
    const pageRouteFile = findPageRouteFile(pageId, pageContext._pageFilesAll);
    if (!pageRouteFile) {
      const routeString = deduceRouteStringFromFilesystemPath(pageId, filesystemRoots);
      assert(routeString.startsWith("/"));
      assert(!routeString.endsWith("/") || routeString === "/");
      pageRoutes.push({
        pageId,
        routeString,
        pageRouteFilePath: null,
        routeType: "FILESYSTEM"
      });
    } else {
      const { filePath, fileExports } = pageRouteFile;
      assert(fileExports);
      assertUsage("default" in fileExports, `${filePath} should have a default export.`);
      if (hasProp(fileExports, "default", "string")) {
        const routeString = fileExports.default;
        assertUsage(routeString.startsWith("/"), `A Route String should start with a leading \`/\` but \`${filePath}\` has \`export default '${routeString}'\`. Make sure to \`export default '/${routeString}'\` instead.`);
        pageRoutes.push({
          pageId,
          routeString,
          pageRouteFilePath: filePath,
          routeType: "STRING"
        });
        return;
      }
      if (hasProp(fileExports, "default", "function")) {
        const routeFunction = fileExports.default;
        let allowAsync = false;
        const allowKey = "iKnowThePerformanceRisksOfAsyncRouteFunctions";
        if (allowKey in fileExports) {
          assertUsage(hasProp(fileExports, allowKey, "boolean"), `The export \`${allowKey}\` of ${filePath} should be a boolean.`);
          allowAsync = fileExports[allowKey];
        }
        pageRoutes.push({
          pageId,
          routeFunction,
          pageRouteFilePath: filePath,
          allowAsync,
          routeType: "FUNCTION"
        });
        return;
      }
      assertUsage(false, `The default export of ${filePath} should be a string or a function.`);
    }
  });
  return pageRoutes;
}
function getGlobalHooks(pageContext) {
  let onBeforeRouteHook = null;
  const filesystemRoots = [];
  pageContext._pageFilesAll.filter((p) => p.fileType === ".page.route" && p.isDefaultPageFile).forEach(({ filePath, fileExports }) => {
    assert(fileExports);
    if ("onBeforeRoute" in fileExports) {
      assertUsage(hasProp(fileExports, "onBeforeRoute", "function"), `\`export { onBeforeRoute }\` of ${filePath} should be a function.`);
      const { onBeforeRoute } = fileExports;
      onBeforeRouteHook = { filePath, onBeforeRoute };
    }
    if ("filesystemRoutingRoot" in fileExports) {
      assertUsage(hasProp(fileExports, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${filePath} should be a string.`);
      assertUsage(hasProp(fileExports, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${filePath} is \`'${fileExports.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`);
      filesystemRoots.push({
        filesystemRoot: dirname(filePath),
        routeRoot: fileExports.filesystemRoutingRoot
      });
    }
  });
  return { onBeforeRouteHook, filesystemRoots };
}
function findPageRouteFile(pageId, pageFilesAll) {
  return pageFilesAll.find((p) => p.pageId === pageId && p.fileType === ".page.route");
}
function dirname(filePath) {
  assert(filePath.startsWith("/"));
  assert(!filePath.endsWith("/"));
  const paths = filePath.split("/");
  const dirPath = slice(paths, 0, -1).join("/") || "/";
  assert(dirPath.startsWith("/"));
  assert(!dirPath.endsWith("/") || dirPath === "/");
  return dirPath;
}
function addComputedUrlProps(pageContext) {
  assert(pageContext.urlOriginal);
  if ("urlPathname" in pageContext) {
    assert(hasPropertyGetter(pageContext, "urlPathname"));
  } else {
    Object.defineProperty(pageContext, "urlPathname", {
      get: urlPathnameGetter,
      enumerable: true,
      configurable: true
    });
  }
  if ("url" in pageContext) {
    assert(hasPropertyGetter(pageContext, "url"));
  } else {
    Object.defineProperty(pageContext, "url", {
      get: urlGetter,
      enumerable: false,
      configurable: true
    });
  }
  if ("urlParsed" in pageContext) {
    assert(hasPropertyGetter(pageContext, "urlParsed"));
  } else {
    Object.defineProperty(pageContext, "urlParsed", {
      get: urlParsedGetter,
      enumerable: true,
      configurable: true
    });
  }
}
function getUrlParsed(pageContext) {
  let url = pageContext.urlOriginal;
  const { _baseUrl: baseUrl2, _urlProcessor: urlProcessor } = pageContext;
  assert(baseUrl2.startsWith("/"));
  assert(urlProcessor === null || isCallable(urlProcessor));
  if (urlProcessor !== null) {
    url = urlProcessor(url);
  }
  return parseUrl(url, baseUrl2);
}
function urlPathnameGetter() {
  const { pathname } = getUrlParsed(this);
  const urlPathname = pathname;
  assert(urlPathname.startsWith("/"));
  return urlPathname;
}
function urlGetter() {
  assertWarning(false, "`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)", { onlyOnce: true, showStackTrace: true });
  return urlPathnameGetter.call(this);
}
function urlParsedGetter() {
  const urlParsedOriginal = getUrlParsed(this);
  const { origin, pathname, pathnameOriginal, search, searchAll, searchOriginal, hash, hashOriginal } = urlParsedOriginal;
  const urlParsed = {
    origin,
    pathname,
    pathnameOriginal,
    search,
    searchAll,
    searchOriginal,
    hash,
    hashOriginal,
    get hashString() {
      assertWarning(false, "`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`", { onlyOnce: true, showStackTrace: true });
      return hashOriginal;
    },
    get searchString() {
      assertWarning(false, "`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`", { onlyOnce: true, showStackTrace: true });
      return searchOriginal;
    }
  };
  makeNonEnumerable(urlParsed, "hashString");
  makeNonEnumerable(urlParsed, "searchString");
  return urlParsed;
}
function makeNonEnumerable(obj, prop) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  Object.defineProperty(obj, prop, { ...descriptor, enumerable: false });
}
function assertURLs(pageContext) {
  assert(typeof pageContext.urlOriginal === "string");
  assert(typeof pageContext.urlPathname === "string");
  assert(isPlainObject(pageContext.urlParsed));
  assert(pageContext.urlPathname === pageContext.urlParsed.pathname);
}
const PARAM_TOKEN_NEW = "@";
const PARAM_TOKEN_OLD = ":";
function resolveRouteString(routeString, urlPathname) {
  assertUsage(routeString === "*" || routeString.startsWith("/"), `Invalid route string \`${routeString}\`${routeString === "" ? " (empty string)" : ""}: route strings should start with a leading slash \`/\` (or be \`*\`).`);
  assert(urlPathname.startsWith("/"));
  const routeSegments = routeString.split("/");
  const urlSegments = urlPathname.split("/");
  const routeParams = {};
  assertGlob(routeString);
  if (routeString === "*") {
    routeString = "/*";
  }
  for (let i = 0; i < Math.max(routeSegments.length, urlSegments.length); i++) {
    const routeSegment = routeSegments[i];
    const urlSegment = urlSegments[i];
    if (routeSegment === "*") {
      routeParams["*"] = urlSegments.slice(Math.max(1, i)).join("/");
      return { routeParams };
    } else if (routeSegment && isParam(routeSegment)) {
      assertWarning(!routeSegment.startsWith(PARAM_TOKEN_OLD), `Outdated route string \`${routeString}\`, use \`${routeString.split(PARAM_TOKEN_OLD).join(PARAM_TOKEN_NEW)}\` instead.`, { onlyOnce: true });
      if (!urlSegment) {
        return null;
      }
      routeParams[routeSegment.slice(1)] = urlSegment;
    } else {
      if ((routeSegment || "") !== (urlSegment || "")) {
        return null;
      }
    }
  }
  return { routeParams };
}
function assertGlob(routeString) {
  const numberOfGlobChars = routeString.split("*").length - 1;
  assertUsage(numberOfGlobChars <= 1, `Invalid route string \`${routeString}\`: route strings are not allowed to contain more than one glob character \`*\`.`);
  assertUsage(numberOfGlobChars === 0 || numberOfGlobChars === 1 && routeString.endsWith("*"), `Invalid route string \`${routeString}\`: make sure your route string ends with the glob character \`*\`.`);
}
function analyzeRouteString(routeString) {
  const routeSegments = routeString.split("/").filter((routeSegment) => routeSegment !== "" && routeSegment !== "*");
  let numberOfStaticSegmentsBeginning = 0;
  for (const routeSegment of routeSegments) {
    if (isParam(routeSegment)) {
      break;
    }
    numberOfStaticSegmentsBeginning++;
  }
  const numberOfStaticSegements = routeSegments.filter((s) => !isParam(s)).length;
  const numberOfParameterSegments = routeSegments.filter((s) => isParam(s)).length;
  const isCatchAll = routeString.endsWith("*");
  return { numberOfParameterSegments, numberOfStaticSegmentsBeginning, numberOfStaticSegements, isCatchAll };
}
function isParam(routeSegment) {
  return routeSegment.startsWith(PARAM_TOKEN_NEW) || routeSegment.startsWith(PARAM_TOKEN_OLD);
}
function isStaticRouteString(routeString) {
  const url = routeString;
  const match = resolveRouteString(routeString, url);
  assert(match);
  return Object.keys(match.routeParams).length === 0;
}
function resolvePrecendence(routeMatches) {
  routeMatches.sort(sortMatches).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !!routeMatch.precedence && routeMatch.precedence < 0)).sort(makeFirst((routeMatch) => routeMatch.routeType === "STRING" && isStaticRouteString(routeMatch.routeString) === false)).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !routeMatch.precedence)).sort(makeFirst((routeMatch) => routeMatch.routeType === "STRING" && isStaticRouteString(routeMatch.routeString) === true)).sort(makeFirst((routeMatch) => routeMatch.routeType === "FILESYSTEM")).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !!routeMatch.precedence && routeMatch.precedence > 0));
}
function sortMatches(routeMatch1, routeMatch2) {
  var _a, _b;
  {
    const precedence1 = (_a = routeMatch1.precedence) !== null && _a !== void 0 ? _a : 0;
    const precedence2 = (_b = routeMatch2.precedence) !== null && _b !== void 0 ? _b : 0;
    if (precedence1 !== precedence2) {
      return precedence1 > precedence2 ? -1 : 1;
    }
  }
  if (!routeMatch2.routeString) {
    return 0;
  }
  if (!routeMatch1.routeString) {
    return 0;
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfStaticSegmentsBeginning;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfStaticSegements;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfParameterSegments;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    if (analyzeRouteString(routeMatch2.routeString).isCatchAll) {
      return -1;
    }
    if (analyzeRouteString(routeMatch1.routeString).isCatchAll) {
      return 1;
    }
  }
  return 0;
}
async function resolveRouteFunction(routeFunction, allowAsync, pageContext, pageRouteFilePath) {
  assertURLs(pageContext);
  let result = routeFunction(pageContext);
  assertUsage(!isPromise(result) || allowAsync, `The Route Function ${pageRouteFilePath} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`);
  result = await result;
  if (result === false) {
    return null;
  }
  if (result === true) {
    result = {};
  }
  assertUsage(isPlainObject(result), `The Route Function ${pageRouteFilePath} should return a boolean or a plain JavaScript object, instead it returns \`${hasProp(result, "constructor") ? result.constructor : result}\`.`);
  if ("match" in result) {
    const { match } = result;
    assertUsage(typeof match === "boolean", `The \`match\` value returned by the Route Function ${pageRouteFilePath} should be a boolean.`);
    if (!match) {
      return null;
    }
  }
  let precedence = null;
  if ("precedence" in result) {
    precedence = result.precedence;
    assertUsage(typeof precedence === "number", `The \`precedence\` value returned by the Route Function ${pageRouteFilePath} should be a number.`);
  }
  assertRouteParams(result, `The \`routeParams\` object returned by the Route Function ${pageRouteFilePath} should`);
  const routeParams = result.routeParams || {};
  assertUsage(!("pageContext" in result), "Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async");
  assert(isPlainObject(routeParams));
  Object.keys(result).forEach((key) => {
    assertUsage(key === "match" || key === "routeParams" || key === "precedence", `The Route Function ${pageRouteFilePath} returned an object with an unknown key \`{ ${key} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`);
  });
  return {
    precedence,
    routeParams
  };
}
function assertRouteParams(result, errPrefix) {
  assert(errPrefix.endsWith(" should"));
  if (!hasProp(result, "routeParams")) {
    return;
  }
  assertUsage(isPlainObject(result.routeParams), `${errPrefix} be a plain JavaScript object.`);
  assertUsage(Object.values(result.routeParams).every((val) => typeof val === "string"), `${errPrefix} only hold string values.`);
}
function assertPageContextProvidedByUser(pageContextProvidedByUser, { hook, errorMessagePrefix }) {
  if (!errorMessagePrefix) {
    assert(hook);
    const { hookName, hookFilePath } = hook;
    assert(hookFilePath.startsWith("/"));
    assert(!hookName.endsWith(")"));
    errorMessagePrefix = `The \`pageContext\` provided by the \`export { ${hookName} }\` of ${hookFilePath}`;
  }
  assertUsage(isObject(pageContextProvidedByUser), `${errorMessagePrefix} should be an object.`);
  assertUsage(!("_objectCreatedByVitePluginSsr" in pageContextProvidedByUser), `${errorMessagePrefix} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`);
  assertWarning(!("_pageId" in pageContextProvidedByUser), "You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.", { onlyOnce: true });
}
async function callOnBeforeRouteHook(onBeforeRouteHook, pageContext) {
  const hookReturn = await onBeforeRouteHook.onBeforeRoute(pageContext);
  const errPrefix = `The \`onBeforeRoute()\` hook exported by ${onBeforeRouteHook.filePath}`;
  assertUsage(hookReturn === null || hookReturn === void 0 || isObjectWithKeys(hookReturn, ["pageContext"]) && hasProp(hookReturn, "pageContext"), `${errPrefix} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`);
  if (hookReturn === null || hookReturn === void 0) {
    return null;
  }
  assertUsage(hasProp(hookReturn, "pageContext", "object"), `${errPrefix} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`);
  if (hasProp(hookReturn.pageContext, "_pageId") && !hasProp(hookReturn.pageContext, "_pageId", "null")) {
    const errPrefix2 = `${errPrefix} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;
    assertUsage(hasProp(hookReturn.pageContext, "_pageId", "string"), `${errPrefix2} a string or \`null\``);
    assertUsage(pageContext._allPageIds.includes(hookReturn.pageContext._pageId), `${errPrefix2} one of following values: \`[${pageContext._allPageIds.map((s) => `'${s}'`).join(", ")}]\`.`);
  }
  if (hasProp(hookReturn.pageContext, "routeParams")) {
    assertRouteParams(hookReturn.pageContext, `${errPrefix} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);
  }
  const pageContextAddendumHook = {};
  if (hasProp(hookReturn.pageContext, "url")) {
    assertWarning(false, `${errPrefix} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`, { onlyOnce: true });
    hookReturn.pageContext.urlOriginal = hookReturn.pageContext.url;
    delete hookReturn.pageContext.url;
  }
  if (hasProp(hookReturn.pageContext, "urlOriginal")) {
    assertUsage(hasProp(hookReturn.pageContext, "urlOriginal", "string"), `${errPrefix} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`);
    objectAssign(pageContextAddendumHook, { _urlPristine: pageContext.urlOriginal });
  }
  assertPageContextProvidedByUser(hookReturn.pageContext, {
    hook: { hookFilePath: onBeforeRouteHook.filePath, hookName: "onBeforeRoute" }
  });
  objectAssign(pageContextAddendumHook, hookReturn.pageContext);
  return pageContextAddendumHook;
}
var _debug;
function debug(...args) {
  var _a, _b;
  if (!_debug) {
    _debug = (_b = (_a = globalThis).__brillout_debug_createDebugger) === null || _b === void 0 ? void 0 : _b.call(_a, "vps:routing");
  }
  if (_debug) {
    _debug(...args);
  }
}
async function route(pageContext) {
  addComputedUrlProps(pageContext);
  const { pageRoutes, onBeforeRouteHook } = await loadPageRoutes(pageContext);
  debug("Pages routes:", pageRoutes);
  const pageContextAddendum = {};
  if (onBeforeRouteHook) {
    const pageContextAddendumHook = await callOnBeforeRouteHook(onBeforeRouteHook, pageContext);
    if (pageContextAddendumHook) {
      objectAssign(pageContextAddendum, pageContextAddendumHook);
      if (hasProp(pageContextAddendum, "_pageId", "string") || hasProp(pageContextAddendum, "_pageId", "null")) {
        if (!hasProp(pageContextAddendum, "routeParams")) {
          objectAssign(pageContextAddendum, { routeParams: {} });
        } else {
          assert(hasProp(pageContextAddendum, "routeParams", "object"));
        }
        objectAssign(pageContextAddendum, {
          _routingProvidedByOnBeforeRouteHook: true,
          _routeMatches: "CUSTOM_ROUTE"
        });
        return { pageContextAddendum };
      }
      objectAssign(pageContext, pageContextAddendum);
    }
  }
  objectAssign(pageContextAddendum, {
    _routingProvidedByOnBeforeRouteHook: false
  });
  const allPageIds = pageContext._allPageIds;
  assert(allPageIds.length >= 0);
  assertUsage(pageContext._pageFilesAll.length > 0, "No *.page.js file found. You must create at least one *.page.js file.");
  assertUsage(allPageIds.length > 0, "You must create at least one *.page.js file that isn't _default.page.*");
  const { urlPathname } = pageContext;
  assert(urlPathname.startsWith("/"));
  const routeMatches = [];
  await Promise.all(pageRoutes.map(async (pageRoute) => {
    const { pageId, routeType } = pageRoute;
    if (pageRoute.routeType === "FILESYSTEM") {
      const { routeString } = pageRoute;
      const match = resolveRouteString(routeString, urlPathname);
      if (match) {
        const { routeParams } = match;
        routeMatches.push({ pageId, routeParams, routeString, routeType });
      }
      return;
    }
    if (pageRoute.routeType === "STRING") {
      const { routeString } = pageRoute;
      const match = resolveRouteString(routeString, urlPathname);
      if (match) {
        const { routeParams } = match;
        assert(routeType === "STRING");
        routeMatches.push({
          pageId,
          routeString,
          routeParams,
          routeType
        });
      }
      return;
    }
    if (pageRoute.routeType === "FUNCTION") {
      const { routeFunction, allowAsync, pageRouteFilePath } = pageRoute;
      const match = await resolveRouteFunction(routeFunction, allowAsync, pageContext, pageRouteFilePath);
      if (match) {
        const { routeParams, precedence } = match;
        routeMatches.push({ pageId, precedence, routeParams, routeType });
      }
      return;
    }
    assert(false);
  }));
  resolvePrecendence(routeMatches);
  const winner = routeMatches[0];
  debug(`Route matches for URL \`${urlPathname}\` (in precedence order):`, routeMatches);
  objectAssign(pageContextAddendum, { _routeMatches: routeMatches });
  if (!winner) {
    objectAssign(pageContextAddendum, {
      _pageId: null,
      routeParams: {}
    });
    return { pageContextAddendum };
  }
  {
    const { routeParams } = winner;
    assert(isPlainObject(routeParams));
    objectAssign(pageContextAddendum, {
      _pageId: winner.pageId,
      routeParams: winner.routeParams
    });
  }
  return { pageContextAddendum };
}
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/renderer/_error.page.tsx": () => __vitePreload(() => import("./renderer/_error.page.23eb305b.entry.js"), true ? ["assets/js/renderer/_error.page.23eb305b.entry.js","assets/js/jsx-dev-runtime.4156efef.js"] : void 0), "/src/pages/a/index.page.tsx": () => __vitePreload(() => import("./src/pages/a/index.page.ddeddb33.entry.js"), true ? ["assets/js/src/pages/a/index.page.ddeddb33.entry.js","assets/js/jsx-dev-runtime.4156efef.js"] : void 0) });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesLazyClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.tsx": () => __vitePreload(() => import("./renderer/_default.page.client.01064642.entry.js"), true ? ["assets/js/renderer/_default.page.client.01064642.entry.js","assets/js/jsx-dev-runtime.4156efef.js","assets/js/preload-helper.e1a242f9.js","assets/css/_default.page.client.e9fb1ee2.css"] : void 0) });
const pageFilesLazyClient = { ...pageFilesLazyClient1 };
pageFilesLazy[".page.client"] = pageFilesLazyClient;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.tsx": __vite_glob_2_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.server.tsx": __vite_glob_3_0, "/src/pages/a/index.page.server.ts": __vite_glob_3_1 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/renderer/_error.page.tsx": __vite_glob_4_0, "/src/pages/a/index.page.tsx": __vite_glob_4_1 });
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pageFilesLazy,
  pageFilesEager,
  pageFilesExportNamesLazy,
  pageFilesExportNamesEager,
  neverLoaded,
  isGeneratedFile
}, Symbol.toStringTag, { value: "Module" }));
setPageFiles(pageFilesExports);
function isBaseAssets(base) {
  if (base.startsWith("http")) {
    return true;
  }
  return false;
}
function isExternalLink(url) {
  return !url.startsWith("/") && !url.startsWith(".") && !url.startsWith("?") && url !== "";
}
function throttle(func, waitTime) {
  let isQueued = false;
  return () => {
    if (!isQueued) {
      isQueued = true;
      setTimeout(() => {
        isQueued = false;
        func();
      }, waitTime);
    }
  };
}
function getUrlPathname(url) {
  const urlPathname = parseUrl(url, "/").pathname;
  return urlPathname;
}
function serverSideRouteTo(url) {
  window.location.href = url;
}
function isReact() {
  var _a, _b, _c, _d;
  const isReact1 = !!((_b = (_a = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || _a === void 0 ? void 0 : _a.renderers) === null || _b === void 0 ? void 0 : _b.size);
  const isReact2 = !!((_d = (_c = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || _c === void 0 ? void 0 : _c.rendererInterfaces) === null || _d === void 0 ? void 0 : _d.size);
  const isReact3 = !!window.__vite_plugin_react_preamble_installed__;
  return isReact1 || isReact2 || isReact3;
}
function isSameErrorMessage(err1, err2) {
  return (err1 === null || err1 === void 0 ? void 0 : err1.message) === (err2 === null || err2 === void 0 ? void 0 : err2.message);
}
function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds));
}
function humanizeTime(milliseconds) {
  const seconds = milliseconds / 1e3;
  if (seconds < 120) {
    const n = round(seconds);
    return `${n} second${plural(n)}`;
  }
  {
    const minutes = seconds / 60;
    const n = round(minutes);
    return `${n} minute${plural(n)}`;
  }
}
function round(n) {
  let rounded = n.toFixed(1);
  if (rounded.endsWith(".0"))
    rounded = rounded.slice(0, -2);
  return rounded;
}
function plural(n) {
  return n === "1" ? "" : "s";
}
function callHookWithTimeout(call, hookName, hookFilePath) {
  const { timeoutErr, timeoutWarn } = getTimeouts(hookName);
  let resolve;
  let reject;
  const promise = new Promise((resolve_, reject_) => {
    resolve = (ret) => {
      clearTimeouts();
      resolve_(ret);
    };
    reject = (err) => {
      clearTimeouts();
      reject_(err);
    };
  });
  const clearTimeouts = () => {
    clearTimeout(t1);
    clearTimeout(t2);
  };
  const t1 = setTimeout(() => {
    const msg = `${errorPrefix}[Warning] The ${hookName}() hook of ${hookFilePath} is taking more than ${humanizeTime(timeoutWarn)}`;
    console.warn(msg);
  }, timeoutWarn);
  const t2 = setTimeout(() => {
    const err = getProjectError(`Hook timeout: the ${hookName}() hook of ${hookFilePath} didn't finish after ${humanizeTime(timeoutErr)}`);
    reject(err);
  }, timeoutErr);
  (async () => {
    try {
      const ret = await call();
      resolve(ret);
    } catch (err) {
      reject(err);
    }
  })();
  return promise;
}
function getTimeouts(hookName) {
  let timeoutErr = 20 * 1e3;
  let timeoutWarn = 4 * 1e3;
  if (hookName === "onBeforeRoute") {
    timeoutErr = 5 * 1e3;
    timeoutWarn = 1 * 1e3;
  }
  if (hookName === "onBeforePrerender") {
    timeoutErr = 60 * 1e3;
    timeoutWarn = 30 * 1e3;
  }
  return { timeoutErr, timeoutWarn };
}
const globalObject$3 = getGlobalObject("navigationState.ts", {});
const urlFirst = getCurrentUrl();
const navigationState = {
  markNavigationChange() {
    globalObject$3.navigationChanged = true;
  },
  get noNavigationChangeYet() {
    return !globalObject$3.navigationChanged && this.isFirstUrl(getCurrentUrl());
  },
  isFirstUrl(url) {
    return url === urlFirst;
  }
};
function getPageFilesServerSide(pageFilesAll, pageId) {
  return getAllPageIdFilesServerSide(pageFilesAll, pageId);
}
async function analyzePageServerSide(pageFilesAll, pageId) {
  const pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
  const pageFilesServerSideOnly = pageFilesServerSide.filter((p) => p.fileType === ".page.server");
  await Promise.all(pageFilesServerSideOnly.map(async (p) => {
    if (p.exportNames) {
      return;
    }
    assert(p.loadExportNames, pageId);
    await p.loadExportNames();
  }));
  const hasOnBeforeRenderServerSideOnlyHook = pageFilesServerSideOnly.some(({ exportNames }) => {
    assert(exportNames);
    return exportNames.includes("onBeforeRender");
  });
  return { hasOnBeforeRenderServerSideOnlyHook };
}
function assertHookResult(hookResult, hookName, hookResultKeys, hookFile) {
  assert(!hookName.endsWith(")"));
  const errPrefix = `The \`export { ${hookName} }\` of ${hookFile}`;
  assertUsage(hookResult === null || hookResult === void 0 || isPlainObject(hookResult), `${errPrefix} should return \`null\`, \`undefined\`, or a plain JavaScript object.`);
  if (hookResult === void 0 || hookResult === null) {
    return;
  }
  assertObjectKeys(hookResult, hookResultKeys, errPrefix);
  if ("pageContext" in hookResult) {
    assertPageContextProvidedByUser(hookResult["pageContext"], { hook: { hookName, hookFilePath: hookFile } });
  }
}
function assertObjectKeys(obj, keysExpected, errPrefix) {
  const keysUnknown = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (!keysExpected.includes(key)) {
      keysUnknown.push(key);
    }
  }
  assertUsage(keysUnknown.length === 0, [
    errPrefix,
    "returned an object with unknown keys",
    stringifyStringArray(keysUnknown) + ".",
    "Only following keys are allowed:",
    stringifyStringArray(keysExpected) + "."
  ].join(" "));
}
function releasePageContext(pageContext) {
  assert([true, false].includes(pageContext.isHydration));
  assert([true, false, null].includes(pageContext.isBackwardNavigation));
  return releasePageContextCommon(pageContext);
}
const BUILT_IN_CLIENT_ROUTER = ["urlPathname", "urlParsed"];
const BUILT_IN_CLIENT = ["Page", "pageExports", "exports"];
function removeBuiltInOverrides(pageContext) {
  const alreadySet = [...BUILT_IN_CLIENT, ...BUILT_IN_CLIENT_ROUTER];
  alreadySet.forEach((prop) => {
    if (prop in pageContext) {
      if (BUILT_IN_CLIENT_ROUTER.includes(prop)) {
        assert(prop.startsWith("url"));
        assertWarning(false, `\`pageContext.${prop}\` is already available in the browser when using Client Routing; including \`${prop}\` in \`passToClient\` has no effect.`, { onlyOnce: true });
      } else {
        assertWarning(false, `\`pageContext.${prop}\` is a built-in that cannot be overriden; including \`${prop}\` in \`passToClient\` has no effect.`, { onlyOnce: true });
      }
      delete pageContext[prop];
    }
  });
}
const baseUrl = "/";
function urlToFile(url, fileExtension2, doNotCreateExtraDirectory2) {
  const { pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url, baseUrl);
  if (url.startsWith("/")) {
    assert(url === `${pathnameOriginal}${searchOriginal || ""}${hashOriginal || ""}`, { url });
  }
  const hasTrailingSlash = pathnameOriginal.endsWith("/");
  let pathnameModified;
  if (doNotCreateExtraDirectory2 && pathnameOriginal !== "/") {
    if (hasTrailingSlash) {
      pathnameModified = slice(pathnameOriginal, 0, -1);
    } else {
      pathnameModified = pathnameOriginal;
    }
    assert(!pathnameModified.endsWith("/"), { url });
    assert(pathnameModified !== "");
  } else {
    pathnameModified = pathnameOriginal + (hasTrailingSlash ? "" : "/") + "index";
  }
  assert(pathnameModified);
  pathnameModified = pathnameModified + fileExtension2;
  const fileUrl = `${pathnameModified}${searchOriginal || ""}${hashOriginal || ""}`;
  return fileUrl;
}
const fileExtension = ".pageContext.json";
const doNotCreateExtraDirectory = false;
function getPageContextRequestUrl(url) {
  const pageContextRequestUrl = urlToFile(url, fileExtension, doNotCreateExtraDirectory);
  return pageContextRequestUrl;
}
async function getPageContext(pageContext) {
  if (pageContext._isFirstRenderAttempt && navigationState.isFirstUrl(pageContext.urlOriginal)) {
    assert(hasProp(pageContext, "_isFirstRenderAttempt", "true"));
    return getPageContextFirstRender(pageContext);
  } else {
    assert(hasProp(pageContext, "_isFirstRenderAttempt", "false"));
    return getPageContextUponNavigation(pageContext);
  }
}
async function getPageContextFirstRender(pageContext) {
  const pageContextAddendum = getPageContextSerializedInHtml();
  removeBuiltInOverrides(pageContextAddendum);
  objectAssign(pageContextAddendum, {
    isHydration: true,
    _comesDirectlyFromServer: true
  });
  objectAssign(pageContextAddendum, await loadPageFilesClientSide(pageContext._pageFilesAll, pageContextAddendum._pageId));
  return pageContextAddendum;
}
async function getPageContextErrorPage(pageContext) {
  const errorPageId = getErrorPageId(pageContext._allPageIds);
  if (!errorPageId) {
    throw new Error("No error page");
  }
  const pageContextAddendum = {
    isHydration: false,
    _pageId: errorPageId,
    _pageContextRetrievedFromServer: null,
    _comesDirectlyFromServer: false
  };
  objectAssign(pageContextAddendum, await loadPageFilesClientSide(pageContext._pageFilesAll, pageContextAddendum._pageId));
  return pageContextAddendum;
}
async function getPageContextUponNavigation(pageContext) {
  let pageContextAddendum = {};
  objectAssign(pageContextAddendum, {
    isHydration: false
  });
  objectAssign(pageContextAddendum, await getPageContextFromRoute(pageContext));
  objectAssign(pageContextAddendum, await loadPageFilesClientSide(pageContext._pageFilesAll, pageContextAddendum._pageId));
  const pageContextFromHook = await onBeforeRenderExecute({ ...pageContext, ...pageContextAddendum });
  assert([true, false].includes(pageContextFromHook._comesDirectlyFromServer));
  if (!pageContextFromHook["_isError"]) {
    objectAssign(pageContextAddendum, pageContextFromHook);
    return pageContextAddendum;
  } else {
    pageContextAddendum = {};
    assert(pageContextFromHook._comesDirectlyFromServer === true);
    assert(hasProp(pageContextFromHook, "is404", "boolean"));
    assert(hasProp(pageContextFromHook, "pageProps", "object"));
    assert(hasProp(pageContextFromHook.pageProps, "is404", "boolean"));
    assert(!("serverSideError" in pageContextFromHook));
    const errorPageId = getErrorPageId(pageContext._allPageIds);
    assert(errorPageId);
    objectAssign(pageContextAddendum, {
      isHydration: false,
      _pageId: errorPageId
    });
    objectAssign(pageContextAddendum, pageContextFromHook);
    objectAssign(pageContextAddendum, await loadPageFilesClientSide(pageContext._pageFilesAll, pageContextAddendum._pageId));
    return pageContextAddendum;
  }
}
async function onBeforeRenderExecute(pageContext) {
  const hook = getHook(pageContext, "onBeforeRender");
  if (hook) {
    const onBeforeRender = hook.hook;
    const pageContextAddendum2 = {
      _comesDirectlyFromServer: false,
      _pageContextRetrievedFromServer: null
    };
    const pageContextReadyForRelease = releasePageContext({
      ...pageContext,
      ...pageContextAddendum2
    });
    const hookResult = await callHookWithTimeout(() => onBeforeRender(pageContextReadyForRelease), "onBeforeRender", hook.filePath);
    assertHookResult(hookResult, "onBeforeRender", ["pageContext"], hook.filePath);
    const pageContextFromHook = hookResult === null || hookResult === void 0 ? void 0 : hookResult.pageContext;
    objectAssign(pageContextAddendum2, pageContextFromHook);
    return pageContextAddendum2;
  } else if ((await analyzePageServerSide(pageContext._pageFilesAll, pageContext._pageId)).hasOnBeforeRenderServerSideOnlyHook) {
    const pageContextFromServer = await retrievePageContextFromServer(pageContext);
    const pageContextAddendum2 = {};
    Object.assign(pageContextAddendum2, pageContextFromServer);
    objectAssign(pageContextAddendum2, {
      _comesDirectlyFromServer: true,
      _pageContextRetrievedFromServer: pageContextFromServer
    });
    return pageContextAddendum2;
  }
  const pageContextAddendum = { _comesDirectlyFromServer: false, _pageContextRetrievedFromServer: null };
  return pageContextAddendum;
}
async function getPageContextFromRoute(pageContext) {
  const routeResult = await route(pageContext);
  const pageContextFromRoute = routeResult.pageContextAddendum;
  if (!pageContextFromRoute._pageId) {
    throw new Error("No routing match");
  }
  assert(hasProp(pageContextFromRoute, "_pageId", "string"));
  return pageContextFromRoute;
}
async function retrievePageContextFromServer(pageContext) {
  var _a;
  const pageContextUrl = getPageContextRequestUrl((_a = pageContext._urlPristine) !== null && _a !== void 0 ? _a : pageContext.urlOriginal);
  const response = await fetch(pageContextUrl);
  {
    const contentType = response.headers.get("content-type");
    const isRightContentType = contentType && contentType.includes("application/json");
    if (!isRightContentType && response.status === 404) {
      serverSideRouteTo(pageContext.urlOriginal);
      const err = new Error("Page doesn't exist");
      Object.assign(err, { _abortRendering: true });
      throw err;
    }
    assertUsage(isRightContentType, `Wrong HTTP Response Header \`content-type\` value for URL ${pageContextUrl} (it should be \`application/json\` but we got \`${contentType}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`);
  }
  const responseText = await response.text();
  const responseObject = parse(responseText);
  if ("serverSideError" in responseObject) {
    throw getProjectError("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");
  }
  assert(hasProp(responseObject, "pageContext"));
  const pageContextFromServer = responseObject.pageContext;
  assert(isPlainObject(pageContextFromServer));
  assert(hasProp(pageContextFromServer, "_pageId", "string"));
  removeBuiltInOverrides(pageContextFromServer);
  return pageContextFromServer;
}
function getBaseUrl() {
  const baseUrl2 = "/base-url/";
  if (isBaseAssets(baseUrl2)) {
    return "/";
  }
  return baseUrl2;
}
const globalObject$2 = getGlobalObject("getGlobalContext.ts", {});
async function getGlobalContext() {
  if (!globalObject$2.globalContext) {
    globalObject$2.globalContext = await retrieveGlobalContext();
  }
  return globalObject$2.globalContext;
}
async function retrieveGlobalContext() {
  const baseUrl2 = getBaseUrl();
  assertBaseUrl(baseUrl2);
  const globalContext = {
    _urlProcessor: null,
    _baseUrl: baseUrl2,
    _objectCreatedByVitePluginSsr: true,
    _isProduction: false
  };
  const { pageFilesAll, allPageIds } = await getPageFilesAll(true);
  objectAssign(globalContext, {
    _pageFilesAll: pageFilesAll,
    _allPageIds: allPageIds
  });
  return globalContext;
}
async function getPageId(url) {
  const globalContext = await getGlobalContext();
  const pageContext = {
    urlOriginal: url,
    ...globalContext
  };
  const pageFilesAll = globalContext._pageFilesAll;
  addComputedUrlProps(pageContext);
  const routeContext = await route(pageContext);
  if (!("pageContextAddendum" in routeContext)) {
    return { pageId: null, pageFilesAll };
  }
  const pageId = routeContext.pageContextAddendum._pageId;
  if (!pageId) {
    return { pageId: null, pageFilesAll };
  }
  return { pageId, pageFilesAll };
}
function getExportNames(p) {
  if (p.exportNames) {
    return p.exportNames;
  }
  assert(p.fileExports, p.pageId);
  const exportNames = Object.keys(p.fileExports);
  return exportNames;
}
function analyzeExports({ pageFilesClientSide, pageFilesServerSide, pageId }) {
  return { isHtmlOnly: isHtmlOnly(), isClientRouting: isClientRouting() };
  function isHtmlOnly() {
    {
      const hasPageIdIsmrphFile = pageFilesServerSide.some((p) => p.pageId === pageId && p.fileType === ".page");
      if (hasPageIdIsmrphFile) {
        assertClientSideRenderHook();
        return false;
      }
    }
    {
      const hasPageIdServerFile = pageFilesServerSide.some((p) => p.pageId === pageId && p.fileType === ".page.server");
      if (!hasPageIdServerFile) {
        return false;
      }
    }
    {
      const definesClientRenderer = pageFilesClientSide.some((p) => p.pageId === pageId && p.fileType === ".page.client" && getExportNames(p).includes("render"));
      if (definesClientRenderer) {
        return false;
      }
    }
    return true;
  }
  function assertClientSideRenderHook() {
    const hasClientSideRenderHook = pageFilesClientSide.some((p) => {
      return getExportNames(p).includes("render");
    });
    assertUsage(hasClientSideRenderHook, [
      "No client-side `render()` hook found.",
      "See https://vite-plugin-ssr.com/render-modes for more information.",
      [
        "Loaded client-side page files (none of them `export { render }`):",
        ...pageFilesClientSide.map((p, i) => ` (${i + 1}): ${p.filePath}`)
      ].join("\n")
    ].join(" "));
  }
  function isClientRouting() {
    const hasClientRoutingExport = pageFilesClientSide.some((p) => {
      return getExportNames(p).includes("clientRouting");
    });
    return hasClientRoutingExport;
  }
}
function determineClientEntry({ pageFilesClientSide, pageFilesServerSide, isHtmlOnly, isClientRouting }) {
  let clientEntries = [];
  const pageFilesServerSideOnly = pageFilesServerSide.filter((p) => !pageFilesClientSide.includes(p));
  const clientDependencies = [];
  clientDependencies.push(...pageFilesClientSide.map((p) => ({ id: p.filePath, onlyAssets: false })));
  clientDependencies.push(...pageFilesServerSideOnly.map((p) => ({ id: p.filePath, onlyAssets: true })));
  if (isHtmlOnly) {
    clientEntries = pageFilesClientSide.map((p) => p.filePath);
  } else {
    const clientEntry = isClientRouting ? "@@vite-plugin-ssr/dist/esm/client/router/entry.js" : "@@vite-plugin-ssr/dist/esm/client/entry.js";
    clientDependencies.push({ id: clientEntry, onlyAssets: false });
    clientEntries = [clientEntry];
  }
  return { clientEntries, clientDependencies };
}
function analyzePageClientSide(pageFilesAll, pageId) {
  let pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  const pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
  const { isHtmlOnly, isClientRouting } = analyzeExports({ pageFilesClientSide, pageFilesServerSide, pageId });
  if (isHtmlOnly) {
    pageFilesClientSide = pageFilesClientSide.filter((p) => p.fileType === ".page.client" && !getExportNames(p).includes("render"));
    pageFilesClientSide = removeOverridenPageFiles(pageFilesClientSide);
  }
  const { clientEntries, clientDependencies } = determineClientEntry({
    pageFilesClientSide,
    pageFilesServerSide,
    isHtmlOnly,
    isClientRouting
  });
  return { isHtmlOnly, isClientRouting, clientEntries, clientDependencies, pageFilesClientSide, pageFilesServerSide };
}
async function analyzePageClientSideInit(pageFilesAll, pageId, { sharedPageFilesAlreadyLoaded }) {
  const pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  await Promise.all(pageFilesClientSide.map(async (p) => {
    var _a;
    assert(p.fileType === ".page" || p.fileType === ".page.client");
    if (sharedPageFilesAlreadyLoaded && p.fileType === ".page") {
      return;
    }
    await ((_a = p.loadExportNames) === null || _a === void 0 ? void 0 : _a.call(p));
  }));
}
function removeOverridenPageFiles(pageFilesClientSide) {
  const pageFilesClientSide_ = [];
  for (const p of pageFilesClientSide) {
    pageFilesClientSide_.push(p);
    if (getExportNames(p).includes("overrideDefaultPages")) {
      break;
    }
  }
  return pageFilesClientSide_;
}
async function isClientSideRenderable(url) {
  const { pageId, pageFilesAll } = await getPageId(url);
  if (!pageId) {
    return false;
  }
  await analyzePageClientSideInit(pageFilesAll, pageId, { sharedPageFilesAlreadyLoaded: false });
  const { isHtmlOnly, isClientRouting } = analyzePageClientSide(pageFilesAll, pageId);
  return !isHtmlOnly && isClientRouting;
}
function skipLink(linkTag) {
  const url = linkTag.getAttribute("href");
  if (url === null)
    return true;
  if (url === "")
    return true;
  if (isExternalLink(url))
    return true;
  if (isNewTabLink(linkTag))
    return true;
  if (isHashUrl(url))
    return true;
  if (!hasBaseUrl(url)) {
    return true;
  }
  if (!isParsable(url)) {
    return true;
  }
  return false;
}
function isNewTabLink(linkTag) {
  const target = linkTag.getAttribute("target");
  const rel = linkTag.getAttribute("rel");
  return target === "_blank" || target === "_external" || rel === "external" || linkTag.hasAttribute("download");
}
function isHashUrl(url) {
  if (url.startsWith("#")) {
    return true;
  }
  const removeHash = (url2) => url2.split("#")[0];
  if (url.includes("#") && removeHash(url) === removeHash(window.location.href)) {
    return true;
  }
  return false;
}
function hasBaseUrl(url) {
  const baseUrl2 = getBaseUrl();
  assertBaseUrl(baseUrl2);
  const { hasBaseUrl: hasBaseUrl2 } = parseUrl(url, baseUrl2);
  return hasBaseUrl2;
}
function getPrefetchConfig(pageContext, linkTag) {
  const prefetchStaticAssets = getStaticAssetsConfig(pageContext, linkTag);
  return {
    prefetchPageContext: false,
    prefetchStaticAssets
  };
}
function getStaticAssetsConfig(pageContext, linkTag) {
  let prefetchAttribute = getPrefetchAttribute(linkTag);
  let prefetchStaticAssets = (() => {
    if (prefetchAttribute !== null) {
      if (prefetchAttribute === true) {
        return { when: "VIEWPORT" };
      } else {
        return { when: "HOVER" };
      }
    }
    if ("prefetchLinks" in pageContext.exports) {
      assertUsage(prefetchAttribute === null, "`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead.");
    }
    if ("prefetchStaticAssets" in pageContext.exports) {
      const { prefetchStaticAssets: prefetchStaticAssets2 } = pageContext.exports;
      if (prefetchStaticAssets2 === false) {
        return false;
      }
      const wrongUsageMsg = "`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";
      assertUsage(isPlainObject(prefetchStaticAssets2), wrongUsageMsg);
      const keys = Object.keys(prefetchStaticAssets2);
      assertUsage(keys.length === 1 && keys[0] === "when", wrongUsageMsg);
      const { when } = prefetchStaticAssets2;
      if (when === "HOVER" || when === "VIEWPORT") {
        return { when };
      }
      assertUsage(false, wrongUsageMsg);
    }
    return { when: "HOVER" };
  })();
  if (prefetchStaticAssets && prefetchStaticAssets.when === "VIEWPORT" && !pageContext._isProduction) {
    assertInfo(false, "Viewport prefetching is disabled in development", { onlyOnce: true });
    prefetchStaticAssets = { when: "HOVER" };
  }
  return prefetchStaticAssets;
}
function getPrefetchAttribute(linkTag) {
  let prefetchAttribute = linkTag.getAttribute("data-prefetch");
  assertWarning(prefetchAttribute === null, "The `data-prefetch` attribute is outdated.", { onlyOnce: true });
  if (prefetchAttribute === null)
    return null;
  assert(typeof prefetchAttribute === "string");
  if (prefetchAttribute === "true") {
    return true;
  }
  if (prefetchAttribute === "false") {
    return false;
  }
  assertUsage(false, `Wrong data-prefetch value: \`"${prefetchAttribute}"\`; it should be \`"true"\` or \`"false"\`.`);
}
const linkAlreadyPrefetched = /* @__PURE__ */ new Map();
function isAlreadyPrefetched(url) {
  const prefetchUrl = getPrefetchUrl(url);
  return linkAlreadyPrefetched.has(prefetchUrl);
}
function markAsAlreadyPrefetched(url) {
  const prefetchUrl = getPrefetchUrl(url);
  linkAlreadyPrefetched.set(prefetchUrl, true);
}
function getPrefetchUrl(url) {
  return getUrlPathname(url);
}
const linkPrefetchHandlerAdded = /* @__PURE__ */ new Map();
async function prefetch(url) {
  assertUsage(!isExternalLink(url), `You are trying to prefetch ${url} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`);
  if (isAlreadyPrefetched(url))
    return;
  markAsAlreadyPrefetched(url);
  const { pageId, pageFilesAll } = await getPageId(url);
  if (pageId) {
    try {
      await loadPageFilesClientSide(pageFilesAll, pageId);
    } catch (err) {
      if (isErrorFetchingStaticAssets(err)) {
        disableClientRouting();
      } else {
        throw err;
      }
    }
  }
}
function addLinkPrefetchHandlers(pageContext) {
  markAsAlreadyPrefetched(pageContext.urlOriginal);
  const linkTags = [...document.getElementsByTagName("A")];
  linkTags.forEach(async (linkTag) => {
    if (linkPrefetchHandlerAdded.has(linkTag))
      return;
    linkPrefetchHandlerAdded.set(linkTag, true);
    const url = linkTag.getAttribute("href");
    if (skipLink(linkTag))
      return;
    assert(url);
    if (!await isClientSideRenderable(url))
      return;
    if (isAlreadyPrefetched(url))
      return;
    const prefetchConfig = getPrefetchConfig(pageContext, linkTag);
    if (!prefetchConfig.prefetchStaticAssets) {
      return;
    } else if (prefetchConfig.prefetchStaticAssets.when === "HOVER") {
      linkTag.addEventListener("mouseover", () => prefetch(url));
      linkTag.addEventListener("touchstart", () => prefetch(url), { passive: true });
    } else if (prefetchConfig.prefetchStaticAssets.when === "VIEWPORT") {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            prefetch(url);
            observer.disconnect();
          }
        });
      });
      observer.observe(linkTag);
    }
  });
}
function initHistoryState() {
  let state = window.history.state;
  if (!state) {
    state = {};
  }
  let hasModifications = false;
  if (!("timestamp" in state)) {
    hasModifications = true;
    state.timestamp = getTimestamp();
  }
  if (!("scrollPosition" in state)) {
    hasModifications = true;
    state.scrollPosition = getScrollPosition();
  }
  assertState(state);
  if (hasModifications) {
    replaceHistoryState(state);
  }
}
function getHistoryState() {
  const state = window.history.state || {};
  assertState(state);
  return state;
}
function getScrollPosition() {
  const scrollPosition = { x: window.scrollX, y: window.scrollY };
  return scrollPosition;
}
function getTimestamp() {
  return new Date().getTime();
}
function saveScrollPosition() {
  const scrollPosition = getScrollPosition();
  const state = getHistoryState();
  replaceHistoryState({ ...state, scrollPosition });
}
function pushHistory(url, overwriteLastHistoryEntry) {
  if (!overwriteLastHistoryEntry) {
    const timestamp = getTimestamp();
    pushHistoryState({ timestamp, scrollPosition: null }, url);
  } else {
    replaceHistoryState(getHistoryState(), url);
  }
}
function assertState(state) {
  assert(isObject(state));
  if ("timestamp" in state) {
    const { timestamp } = state;
    assert(typeof timestamp === "number");
  }
  if ("scrollPosition" in state) {
    const { scrollPosition } = state;
    if (scrollPosition !== null) {
      assert(hasProp(scrollPosition, "x", "number") && hasProp(scrollPosition, "y", "number"));
    }
  }
}
function replaceHistoryState(state, url) {
  window.history.replaceState(state, "", url !== null && url !== void 0 ? url : null);
}
function pushHistoryState(state, url) {
  window.history.pushState(state, "", url);
}
const globalObject$1 = getGlobalObject("navigate.ts", {});
function defineNavigate(navigate_) {
  globalObject$1.navigate = navigate_;
}
const globalObject = getGlobalObject("useClientRouter.ts", { previousState: getState() });
setupNativeScrollRestoration();
initHistoryState();
function disableClientRouting() {
  globalObject.clientRoutingIsDisabled = true;
  assertInfo(false, `New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.`, { onlyOnce: true });
}
function useClientRouter() {
  autoSaveScrollPosition();
  onLinkClick((url, { keepScrollPosition }) => {
    const scrollTarget = keepScrollPosition ? "preserve-scroll" : "scroll-to-top-or-hash";
    fetchAndRender({ scrollTarget, url, isBackwardNavigation: false, checkClientSideRenderable: true });
  });
  onBrowserHistoryNavigation((scrollTarget, isBackwardNavigation) => {
    fetchAndRender({ scrollTarget, isBackwardNavigation });
  });
  defineNavigate(async (url, { keepScrollPosition = false, overwriteLastHistoryEntry = false } = {}) => {
    const scrollTarget = keepScrollPosition ? "preserve-scroll" : "scroll-to-top-or-hash";
    await fetchAndRender({
      scrollTarget,
      url,
      overwriteLastHistoryEntry,
      isBackwardNavigation: false,
      checkClientSideRenderable: true
    });
  });
  let renderingCounter = 0;
  let renderPromise;
  let isTransitioning = false;
  fetchAndRender({ scrollTarget: "preserve-scroll", isBackwardNavigation: null });
  return;
  async function fetchAndRender({ scrollTarget, url = getCurrentUrl(), overwriteLastHistoryEntry = false, isBackwardNavigation, checkClientSideRenderable }) {
    var _a;
    if (globalObject.clientRoutingIsDisabled) {
      serverSideRouteTo(url);
      return;
    }
    if (checkClientSideRenderable && !await isClientSideRenderable(url)) {
      serverSideRouteTo(url);
      return;
    }
    const pageContext = {
      urlOriginal: url,
      isBackwardNavigation
    };
    const renderingNumber = ++renderingCounter;
    assert(renderingNumber >= 1);
    if (renderingNumber > 1) {
      if (isTransitioning === false) {
        (_a = globalObject.onPageTransitionStart) === null || _a === void 0 ? void 0 : _a.call(globalObject, pageContext);
        isTransitioning = true;
      }
    }
    let hydrationCanBeAborted = false;
    const shouldAbort = () => {
      {
        const isHydration = renderingNumber === 1;
        if (isHydration && hydrationCanBeAborted === false) {
          return false;
        }
      }
      if (renderingNumber !== renderingCounter) {
        return true;
      }
      return false;
    };
    const globalContext = await getGlobalContext();
    if (shouldAbort()) {
      return;
    }
    const isFirstRenderAttempt = renderingNumber === 1;
    objectAssign(pageContext, {
      _isFirstRenderAttempt: isFirstRenderAttempt
    });
    objectAssign(pageContext, globalContext);
    addComputedUrlProps(pageContext);
    let pageContextAddendum;
    try {
      pageContextAddendum = await getPageContext(pageContext);
    } catch (err) {
      if (checkIfAbort(err, pageContext))
        return;
      console.error(err);
      try {
        pageContextAddendum = await getPageContextErrorPage(pageContext);
      } catch (err2) {
        if (checkIfAbort(err2, pageContext))
          return;
        if (!isFirstRenderAttempt) {
          setTimeout(() => {
            window.location.pathname = url;
          }, 0);
        }
        if (!isSameErrorMessage(err, err2)) {
          throw err2;
        } else {
          return;
        }
      }
    }
    objectAssign(pageContext, pageContextAddendum);
    assertHook(pageContext, "onPageTransitionStart");
    globalObject.onPageTransitionStart = pageContext.exports.onPageTransitionStart;
    if (pageContext.exports.hydrationCanBeAborted) {
      hydrationCanBeAborted = true;
    } else {
      assertWarning(!isReact(), "You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting", { onlyOnce: true });
    }
    if (shouldAbort()) {
      return;
    }
    if (renderPromise) {
      await renderPromise;
    }
    if (shouldAbort()) {
      return;
    }
    changeUrl(url, overwriteLastHistoryEntry);
    navigationState.markNavigationChange();
    assert(renderPromise === void 0);
    renderPromise = (async () => {
      const pageContextReadyForRelease = releasePageContext(pageContext);
      assertRenderHook(pageContext);
      const hookFilePath = pageContext.exportsAll.render[0].filePath;
      assert(hookFilePath);
      const hookResult = await callHookWithTimeout(() => pageContext.exports.render(pageContextReadyForRelease), "render", hookFilePath);
      assertUsage(hookResult === void 0, `The render() hook of ${hookFilePath} isn't allowed to return a value`);
      addLinkPrefetchHandlers(pageContext);
    })();
    await renderPromise;
    renderPromise = void 0;
    if (pageContext._isFirstRenderAttempt) {
      assertHook(pageContext, "onHydrationEnd");
      const { onHydrationEnd } = pageContext.exports;
      if (onHydrationEnd) {
        const hookFilePath = pageContext.exportsAll.onHydrationEnd[0].filePath;
        assert(hookFilePath);
        await callHookWithTimeout(() => onHydrationEnd(pageContext), "onHydrationEnd", hookFilePath);
      }
    } else if (renderingNumber === renderingCounter) {
      if (pageContext.exports.onPageTransitionEnd) {
        assertHook(pageContext, "onPageTransitionEnd");
        pageContext.exports.onPageTransitionEnd(pageContext);
      }
      isTransitioning = false;
    }
    setScrollPosition(scrollTarget);
    browserNativeScrollRestoration_disable();
    globalObject.initialRenderIsDone = true;
  }
}
function onLinkClick(callback) {
  document.addEventListener("click", onClick);
  return;
  async function onClick(ev) {
    if (!isNormalLeftClick(ev))
      return;
    const linkTag = findLinkTag(ev.target);
    if (!linkTag)
      return;
    const url = linkTag.getAttribute("href");
    if (skipLink(linkTag))
      return;
    assert(url);
    ev.preventDefault();
    const keepScrollPosition = ![null, "false"].includes(linkTag.getAttribute("keep-scroll-position"));
    callback(url, { keepScrollPosition });
  }
  function isNormalLeftClick(ev) {
    return ev.button === 0 && !ev.ctrlKey && !ev.shiftKey && !ev.altKey && !ev.metaKey;
  }
  function findLinkTag(target) {
    while (target.tagName !== "A") {
      const { parentNode } = target;
      if (!parentNode) {
        return null;
      }
      target = parentNode;
    }
    return target;
  }
}
function onBrowserHistoryNavigation(callback) {
  window.addEventListener("popstate", () => {
    const currentState = getState();
    const scrollTarget = currentState.historyState.scrollPosition || "scroll-to-top-or-hash";
    const isHashNavigation = currentState.urlWithoutHash === globalObject.previousState.urlWithoutHash;
    const isBackwardNavigation = !currentState.historyState.timestamp || !globalObject.previousState.historyState.timestamp ? null : currentState.historyState.timestamp < globalObject.previousState.historyState.timestamp;
    globalObject.previousState = currentState;
    if (isHashNavigation) {
      if (window.history.state === null) {
        initHistoryState();
        globalObject.previousState = getState();
      } else {
        setScrollPosition(scrollTarget);
      }
    } else {
      callback(scrollTarget, isBackwardNavigation);
    }
  });
}
function changeUrl(url, overwriteLastHistoryEntry) {
  if (getCurrentUrl() === url)
    return;
  browserNativeScrollRestoration_disable();
  pushHistory(url, overwriteLastHistoryEntry);
  globalObject.previousState = getState();
}
function getState() {
  return {
    urlWithoutHash: getCurrentUrl({ withoutHash: true }),
    historyState: getHistoryState()
  };
}
function setScrollPosition(scrollTarget) {
  if (scrollTarget === "preserve-scroll") {
    return;
  }
  let scrollPosition;
  if (scrollTarget === "scroll-to-top-or-hash") {
    const hash = getUrlHash();
    if (hash && hash !== "top") {
      const hashTarget = document.getElementById(hash) || document.getElementsByName(hash)[0];
      if (hashTarget) {
        hashTarget.scrollIntoView();
        return;
      }
    }
    scrollPosition = { x: 0, y: 0 };
  } else {
    assert("x" in scrollTarget && "y" in scrollTarget);
    scrollPosition = scrollTarget;
  }
  setScroll(scrollPosition);
}
function setScroll(scrollPosition) {
  const scroll = () => window.scrollTo(scrollPosition.x, scrollPosition.y);
  const done = () => window.scrollX === scrollPosition.x && window.scrollY === scrollPosition.y;
  if (done())
    return;
  scroll();
  if (done())
    return;
  requestAnimationFrame(() => {
    scroll();
    if (done())
      return;
    setTimeout(async () => {
      scroll();
      if (done())
        return;
      const start = new Date().getTime();
      while (true) {
        await sleep(10);
        scroll();
        if (done())
          return;
        const millisecondsElapsed = new Date().getTime() - start;
        if (millisecondsElapsed > 100)
          return;
      }
    }, 0);
  });
}
function autoSaveScrollPosition() {
  window.addEventListener("scroll", throttle(saveScrollPosition, Math.ceil(1e3 / 3)), { passive: true });
  onPageHide(saveScrollPosition);
}
function getUrlHash() {
  let { hash } = window.location;
  if (hash === "")
    return null;
  assert(hash.startsWith("#"));
  hash = hash.slice(1);
  return hash;
}
function setupNativeScrollRestoration() {
  browserNativeScrollRestoration_enable();
  onPageHide(browserNativeScrollRestoration_enable);
  onPageShow(() => globalObject.initialRenderIsDone && browserNativeScrollRestoration_disable());
}
function browserNativeScrollRestoration_disable() {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
}
function browserNativeScrollRestoration_enable() {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "auto";
  }
}
function onPageHide(listener) {
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      listener();
    }
  });
}
function onPageShow(listener) {
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      listener();
    }
  });
}
function checkIfAbort(err, pageContext) {
  if (err === null || err === void 0 ? void 0 : err._abortRendering)
    return true;
  if (handleErrorFetchingStaticAssets(err, pageContext)) {
    return true;
  }
  return false;
}
function handleErrorFetchingStaticAssets(err, pageContext) {
  if (!isErrorFetchingStaticAssets(err)) {
    return false;
  }
  disableClientRouting();
  if (pageContext._isFirstRenderAttempt) {
    throw err;
  }
  serverSideRouteTo(pageContext.urlOriginal);
  return true;
}
useClientRouter();
export {
  __vite_legacy_guard
};
