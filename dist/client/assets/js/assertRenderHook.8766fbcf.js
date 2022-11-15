function createErrorWithCleanStackTrace(errorMessage, numberOfStackTraceLinesToRemove2) {
  let err;
  {
    var stackTraceLimit__original = Error.stackTraceLimit;
    Error.stackTraceLimit = Infinity;
    err = new Error(errorMessage);
    Error.stackTraceLimit = stackTraceLimit__original;
  }
  err.stack = clean(err.stack, numberOfStackTraceLinesToRemove2);
  return err;
}
function clean(errStack, numberOfStackTraceLinesToRemove2) {
  if (!errStack) {
    return errStack;
  }
  const stackLines = splitByLine(errStack);
  let linesRemoved = 0;
  const stackLine__cleaned = stackLines.filter((line) => {
    if (line.includes(" (internal/") || line.includes(" (node:internal")) {
      return false;
    }
    if (linesRemoved < numberOfStackTraceLinesToRemove2 && isStackTraceLine(line)) {
      linesRemoved++;
      return false;
    }
    return true;
  }).join("\n");
  return stackLine__cleaned;
}
function isStackTraceLine(line) {
  return line.startsWith("    at ");
}
function splitByLine(str) {
  return str.split(/\r?\n/);
}
function getGlobalObject(key, defaultValue) {
  const allGlobalObjects = globalThis.__vite_plugin_ssr = globalThis.__vite_plugin_ssr || {};
  const globalObject2 = allGlobalObjects[key] = allGlobalObjects[key] || defaultValue;
  return globalObject2;
}
function unique(arr) {
  return Array.from(new Set(arr));
}
const globalObject$2 = getGlobalObject("assertPackageInstances.ts", {
  instances: []
});
function assertSingleVersion() {
  const versions = unique(globalObject$2.instances);
  if (versions.length > 1) {
    throw new Error(`Multiple versions \`vite-plugin-ssr@${versions[0]}\` and \`vite-plugin-ssr@${versions[1]}\` loaded. Make sure only one version is loaded.`);
  }
}
function assertBundle() {
  if (!globalObject$2.checkBundle) {
    return;
  }
  if (globalObject$2.instances.length <= 1) {
    return;
  }
  throw new Error("vite-plugin-ssr is included twice in your bundle. Make sure it's inlcuded only once. (To reduce bundle size.)");
}
function addPackageInstance(projectVersion) {
  globalObject$2.instances.push(projectVersion);
  assertSingleVersion();
  assertBundle();
}
const PROJECT_VERSION = "0.4.48";
const projectInfo = {
  projectName: "vite-plugin-ssr",
  projectVersion: PROJECT_VERSION,
  npmPackageName: "vite-plugin-ssr",
  githubRepository: "https://github.com/brillout/vite-plugin-ssr",
  discordInviteToolChannel: "https://discord.com/invite/qTq92FQzKb"
};
addPackageInstance(projectInfo.projectVersion);
const errorPrefix = `[${projectInfo.npmPackageName}@${projectInfo.projectVersion}]`;
const internalErrorPrefix = `${errorPrefix}[Bug]`;
const usageErrorPrefix = `${errorPrefix}[Wrong Usage]`;
const warningPrefix = `${errorPrefix}[Warning]`;
const infoPrefix = `${errorPrefix}[Info]`;
const numberOfStackTraceLinesToRemove = 2;
function assert(condition, debugInfo) {
  if (condition) {
    return;
  }
  const debugStr = (() => {
    if (!debugInfo) {
      return "";
    }
    const debugInfoSerialized = typeof debugInfo === "string" ? debugInfo : "`" + JSON.stringify(debugInfo) + "`";
    return `Debug info (this is for the ${projectInfo.projectName} maintainers; you can ignore this): ${debugInfoSerialized}.`;
  })();
  const internalError = createErrorWithCleanStackTrace([
    `${internalErrorPrefix} You stumbled upon a bug in ${projectInfo.projectName}'s source code.`,
    `Reach out at ${projectInfo.githubRepository}/issues/new or ${projectInfo.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,
    "A maintainer will fix the bug (usually under 24 hours).",
    `Don't hesitate to reach out as it makes ${projectInfo.projectName} more robust.`,
    debugStr
  ].join(" "), numberOfStackTraceLinesToRemove);
  throw internalError;
}
function assertUsage(condition, errorMessage) {
  if (condition) {
    return;
  }
  const whiteSpace = errorMessage.startsWith("[") ? "" : " ";
  const usageError = createErrorWithCleanStackTrace(`${usageErrorPrefix}${whiteSpace}${errorMessage}`, numberOfStackTraceLinesToRemove);
  throw usageError;
}
function getProjectError(errorMessage) {
  const sep = errorMessage.startsWith("[") ? "" : " ";
  const pluginError = createErrorWithCleanStackTrace(`${errorPrefix}${sep}${errorMessage}`, numberOfStackTraceLinesToRemove);
  return pluginError;
}
const globalObject$1 = getGlobalObject("assert.ts", { alreadyLogged: /* @__PURE__ */ new Set() });
function assertWarning(condition, errorMessage, { onlyOnce, showStackTrace }) {
  if (condition) {
    return;
  }
  const msg = `${warningPrefix} ${errorMessage}`;
  if (onlyOnce) {
    const { alreadyLogged } = globalObject$1;
    const key = onlyOnce === true ? msg : onlyOnce;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  if (showStackTrace) {
    console.warn(new Error(msg));
  } else {
    console.warn(msg);
  }
}
function assertInfo(condition, errorMessage, { onlyOnce }) {
  if (condition) {
    return;
  }
  const msg = `${infoPrefix} ${errorMessage}`;
  if (onlyOnce) {
    const { alreadyLogged } = globalObject$1;
    const key = msg;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  console.log(msg);
}
function slice(thing, from, to) {
  if (typeof thing === "string") {
    return sliceArray(thing.split(""), from, to).join("");
  } else {
    return sliceArray(thing, from, to);
  }
}
function sliceArray(list, from, to) {
  const listSlice = [];
  let start = from >= 0 ? from : list.length + from;
  assert(start >= 0 && start <= list.length);
  let end = to >= 0 ? to : list.length + to;
  assert(end >= 0 && end <= list.length);
  while (true) {
    if (start === end) {
      break;
    }
    if (start === list.length) {
      start = 0;
    }
    if (start === end) {
      break;
    }
    const el = list[start];
    assert(el !== void 0);
    listSlice.push(el);
    start++;
  }
  return listSlice;
}
function isParsable(url) {
  return url.startsWith("/") || url.startsWith("http") || url.startsWith(".") || url.startsWith("?") || url.startsWith("#") || url === "";
}
function parseUrl(url, baseUrl) {
  assert(isParsable(url), { url });
  assert(baseUrl.startsWith("/"), { url, baseUrl });
  const [urlWithoutHash, ...hashList] = url.split("#");
  assert(urlWithoutHash !== void 0);
  const hashOriginal = ["", ...hashList].join("#") || null;
  assert(hashOriginal === null || hashOriginal.startsWith("#"));
  const hash = hashOriginal === null ? "" : decodeSafe(hashOriginal.slice(1));
  const [urlWithoutSearch, ...searchList] = urlWithoutHash.split("?");
  assert(urlWithoutSearch !== void 0);
  const searchOriginal = ["", ...searchList].join("?") || null;
  assert(searchOriginal === null || searchOriginal.startsWith("?"), { url, searchOriginal });
  const search = {};
  const searchAll = {};
  Array.from(new URLSearchParams(searchOriginal || "")).forEach(([key, val]) => {
    search[key] = val;
    searchAll[key] = [...searchAll[key] || [], val];
  });
  const { origin, pathnameResolved } = parseWithNewUrl(urlWithoutSearch, baseUrl);
  assert(origin === null || origin === decodeSafe(origin), { origin });
  assert(pathnameResolved.startsWith("/"), { url, pathnameResolved });
  assert(origin === null || url.startsWith(origin), { url, origin });
  const pathnameOriginal = urlWithoutSearch.slice((origin || "").length);
  {
    const urlRecreated = `${origin || ""}${pathnameOriginal}${searchOriginal || ""}${hashOriginal || ""}`;
    assert(url === urlRecreated, { url, urlRecreated });
  }
  let { pathname, hasBaseUrl } = analyzeBaseUrl(pathnameResolved, baseUrl);
  pathname = decodePathname(pathname);
  assert(pathname.startsWith("/"));
  return {
    origin,
    pathname,
    pathnameOriginal,
    hasBaseUrl,
    search,
    searchAll,
    searchOriginal,
    hash,
    hashOriginal
  };
}
function decodeSafe(urlComponent) {
  try {
    return decodeURIComponent(urlComponent);
  } catch (e) {
  }
  try {
    return decodeURI(urlComponent);
  } catch (e) {
  }
  return urlComponent;
}
function decodePathname(urlPathname) {
  return urlPathname.split("/").map((dir) => decodeSafe(dir).split("/").join("%2F")).join("/");
}
function parseWithNewUrl(urlWithoutSearch, baseUrl) {
  var _a;
  if (urlWithoutSearch.startsWith("//")) {
    return { origin: null, pathnameResolved: urlWithoutSearch };
  }
  let origin;
  let pathnameResolved;
  try {
    const urlParsed = new URL(urlWithoutSearch);
    origin = urlParsed.origin;
    pathnameResolved = urlParsed.pathname;
  } catch (err) {
    origin = null;
    let base = typeof window !== "undefined" && ((_a = window === null || window === void 0 ? void 0 : window.document) === null || _a === void 0 ? void 0 : _a.baseURI);
    base = base || "http://fake.example.org" + baseUrl;
    const urlParsed = new URL(urlWithoutSearch, base);
    pathnameResolved = urlParsed.pathname;
  }
  assert(pathnameResolved.startsWith("/"), { urlWithoutSearch, pathnameResolved });
  assert(pathnameResolved === pathnameResolved.split("?")[0].split("#")[0]);
  return { origin, pathnameResolved };
}
function assertBaseUrl(baseUrl) {
  assert(baseUrl.startsWith("/"));
}
function assertUrlPathname(urlPathname) {
  assert(urlPathname.startsWith("/"));
  assert(!urlPathname.includes("?"));
  assert(!urlPathname.includes("#"));
}
function analyzeBaseUrl(urlPathnameWithBase, baseUrl) {
  assertUrlPathname(urlPathnameWithBase);
  assertBaseUrl(baseUrl);
  let urlPathname = urlPathnameWithBase;
  assert(urlPathname.startsWith("/"));
  assert(baseUrl.startsWith("/"));
  if (baseUrl === "/") {
    const pathname = urlPathnameWithBase;
    return { pathname, hasBaseUrl: true };
  }
  let baseUrlNormalized = baseUrl;
  if (baseUrl.endsWith("/") && urlPathname === slice(baseUrl, 0, -1)) {
    baseUrlNormalized = slice(baseUrl, 0, -1);
    assert(urlPathname === baseUrlNormalized);
  }
  if (!urlPathname.startsWith(baseUrlNormalized)) {
    const pathname = urlPathnameWithBase;
    return { pathname, hasBaseUrl: false };
  }
  assert(urlPathname.startsWith("/") || urlPathname.startsWith("http"));
  assert(urlPathname.startsWith(baseUrlNormalized));
  urlPathname = urlPathname.slice(baseUrlNormalized.length);
  if (!urlPathname.startsWith("/"))
    urlPathname = "/" + urlPathname;
  assert(urlPathname.startsWith("/"));
  return { pathname: urlPathname, hasBaseUrl: true };
}
function objectAssign(obj, objAddendum) {
  Object.assign(obj, objAddendum);
}
function isCallable(thing) {
  return thing instanceof Function || typeof thing === "function";
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function higherFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    if (val1 === val2) {
      return 0;
    }
    return val1 > val2 ? -1 : 1;
  };
}
function makeFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    assert([true, false, null].includes(val1));
    assert([true, false, null].includes(val2));
    if (val1 === val2) {
      return 0;
    }
    if (val1 === true || val2 === false) {
      return -1;
    }
    if (val2 === true || val1 === false) {
      return 1;
    }
    assert(false);
  };
}
function makeLast(getValue) {
  return makeFirst((element) => {
    const val = getValue(element);
    if (val === null) {
      return null;
    } else {
      return !val;
    }
  });
}
function isBrowser() {
  return typeof window !== "undefined" && typeof window.scrollY === "number";
}
function hasProp(obj, prop, type = "unknown") {
  const propExists = typeof obj === "object" && obj !== null && prop in obj;
  if (!propExists) {
    return type === "undefined";
  }
  if (type === "unknown") {
    return true;
  }
  const propValue = obj[prop];
  if (type === "array") {
    return Array.isArray(propValue);
  }
  if (type === "string[]") {
    return Array.isArray(propValue) && propValue.every((el) => typeof el === "string");
  }
  if (type === "function") {
    return isCallable(propValue);
  }
  if (Array.isArray(type)) {
    return typeof propValue === "string" && type.includes(propValue);
  }
  if (type === "null") {
    return propValue === null;
  }
  if (type === "undefined") {
    return propValue === void 0;
  }
  if (type === "true") {
    return propValue === true;
  }
  if (type === "false") {
    return propValue === false;
  }
  return typeof propValue === type;
}
function compareString(str1, str2) {
  if (str1.toLowerCase() < str2.toLowerCase())
    return -1;
  if (str1.toLowerCase() > str2.toLowerCase())
    return 1;
  return 0;
}
const isNotNullish = (p) => p !== null && p !== void 0;
const sepWin32 = "\\";
function assertPosixPath(path) {
  assert(path && !path.includes(sepWin32), `Wrongly formatted path: ${path}`);
}
function isJavaScriptFile(filePath) {
  return /\.(c|m)?(j|t)sx?$/.test(filePath);
}
const enforceTrue = ["clientRouting"];
function assertExportValues(pageFile) {
  enforceTrue.forEach((exportName) => {
    assert(pageFile.fileExports);
    if (!(exportName in pageFile.fileExports))
      return;
    const explainer = `The value of \`${exportName}\` is only allowed to be \`true\`.`;
    assertUsage(pageFile.fileExports[exportName] !== false, `${pageFile.filePath} has \`export { ${exportName} }\` with the value \`false\` which is forbidden: remove \`export { ${exportName} }\` instead. (${explainer})`);
    assertUsage(pageFile.fileExports[exportName] === true, `${pageFile.filePath} has \`export { ${exportName} }\` with a forbidden value. ${explainer}`);
  });
}
const forbiddenDefaultExports = ["render", "clientRouting", "prerender", "doNotPrerender"];
function assertDefaultExports(defaultExportName, filePath) {
  assertUsage(!forbiddenDefaultExports.includes(defaultExportName), `${filePath} has \`export default { ${defaultExportName} }\` which is forbidden, use \`export { ${defaultExportName} }\` instead.`);
}
function getExports(pageFiles2) {
  const exportsAll = {};
  pageFiles2.forEach((pageFile) => {
    const exportValues = getExportValues(pageFile);
    exportValues.forEach(({ exportName, exportValue, isFromDefaultExport }) => {
      var _a;
      assert(exportName !== "default");
      exportsAll[exportName] = (_a = exportsAll[exportName]) !== null && _a !== void 0 ? _a : [];
      exportsAll[exportName].push({
        exportValue,
        filePath: pageFile.filePath,
        _filePath: pageFile.filePath,
        _fileType: pageFile.fileType,
        _isFromDefaultExport: isFromDefaultExport
      });
    });
  });
  const pageExports = createObjectWithDeprecationWarning();
  const exports = {};
  Object.entries(exportsAll).forEach(([exportName, values]) => {
    values.forEach(({ exportValue, _fileType, _isFromDefaultExport }) => {
      var _a;
      exports[exportName] = (_a = exports[exportName]) !== null && _a !== void 0 ? _a : exportValue;
      if (_fileType === ".page" && !_isFromDefaultExport) {
        if (!(exportName in pageExports)) {
          pageExports[exportName] = exportValue;
        }
      }
    });
  });
  assert(!("default" in exports));
  assert(!("default" in exportsAll));
  return {
    exports,
    exportsAll,
    pageExports
  };
}
function getExportValues(pageFile) {
  const { filePath, fileExports } = pageFile;
  assert(fileExports);
  const exportValues = [];
  Object.entries(fileExports).sort(makeLast(([exportName]) => exportName === "default")).forEach(([exportName, exportValue]) => {
    let isFromDefaultExport = exportName === "default";
    if (isFromDefaultExport) {
      if (!isJavaScriptFile(filePath)) {
        exportName = "Page";
      } else {
        assertUsage(isObject(exportValue), `The \`export default\` of ${filePath} should be an object.`);
        Object.entries(exportValue).forEach(([defaultExportName, defaultExportValue]) => {
          assertDefaultExports(defaultExportName, filePath);
          exportValues.push({
            exportName: defaultExportName,
            exportValue: defaultExportValue,
            isFromDefaultExport
          });
        });
        return;
      }
    }
    exportValues.push({
      exportName,
      exportValue,
      isFromDefaultExport
    });
  });
  exportValues.forEach(({ exportName, isFromDefaultExport }) => {
    assert(!(isFromDefaultExport && forbiddenDefaultExports.includes(exportName)));
  });
  return exportValues;
}
function createObjectWithDeprecationWarning() {
  return new Proxy({}, {
    get(...args) {
      if (!isBrowser()) {
        assertWarning(false, "`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports", { onlyOnce: true, showStackTrace: true });
      }
      return Reflect.get(...args);
    }
  });
}
function determinePageId(filePath) {
  const pageSuffix = ".page.";
  const pageId = slice(filePath.split(pageSuffix), 0, -1).join(pageSuffix);
  assert(!pageId.includes("\\"));
  return pageId;
}
function getErrorPageId(allPageIds) {
  const errorPageIds = allPageIds.filter((pageId) => isErrorPageId(pageId));
  assertUsage(errorPageIds.length <= 1, `Only one \`_error.page.js\` is allowed. Found several: ${errorPageIds.join(" ")}`);
  if (errorPageIds.length > 0) {
    const errorPageId = errorPageIds[0];
    assert(errorPageId);
    return errorPageId;
  }
  return null;
}
function isErrorPageId(pageId) {
  assert(!pageId.includes("\\"));
  return pageId.includes("/_error");
}
function getPageFileObject(filePath) {
  const isRelevant = (pageId) => pageFile.pageId === pageId || pageFile.isDefaultPageFile && (pageFile.isRendererPageFile || isAncestorDefaultPage(pageId, pageFile.filePath));
  const fileType = determineFileType(filePath);
  const pageFile = {
    filePath,
    fileType,
    isRelevant,
    isDefaultPageFile: isDefaultFilePath(filePath),
    isRendererPageFile: isDefaultFilePath(filePath) && isRendererFilePath(filePath),
    isErrorPageFile: isErrorPageId(filePath),
    pageId: determinePageId(filePath)
  };
  return pageFile;
}
function determineFileType(filePath) {
  assertPosixPath(filePath);
  const fileName = filePath.split("/").slice(-1)[0];
  const fileNameSegments = fileName.split(".");
  const suffix1 = fileNameSegments.slice(-3)[0];
  const suffix2 = fileNameSegments.slice(-2)[0];
  if (suffix2 === "page") {
    return ".page";
  }
  assert(suffix1 === "page", { filePath });
  if (suffix2 === "server") {
    return ".page.server";
  }
  if (suffix2 === "client") {
    return ".page.client";
  }
  if (suffix2 === "route") {
    return ".page.route";
  }
  assert(false, { filePath });
}
function isDefaultFilePath(filePath) {
  assertPosixPath(filePath);
  assert(filePath.startsWith("/"));
  if (isErrorPageId(filePath)) {
    return false;
  }
  return filePath.includes("/_default");
}
function isRendererFilePath(filePath) {
  assertPosixPath(filePath);
  assert(filePath.startsWith("/"));
  return filePath.includes("/renderer/");
}
function isAncestorDefaultPage(pageId, defaultPageFilePath) {
  assertPosixPath(pageId);
  assertPosixPath(defaultPageFilePath);
  assert(pageId.startsWith("/"));
  assert(defaultPageFilePath.startsWith("/"));
  assert(!pageId.endsWith("/"));
  assert(!defaultPageFilePath.endsWith("/"));
  assert(isDefaultFilePath(defaultPageFilePath));
  const defaultPageDir = slice(defaultPageFilePath.split("/"), 0, -1).filter((filePathSegment) => filePathSegment !== "_default").join("/");
  return pageId.startsWith(defaultPageDir);
}
const fileTypes = [".page", ".page.server", ".page.route", ".page.client"];
function parseGlobResults(pageFilesExports) {
  assert(hasProp(pageFilesExports, "isGeneratedFile"), "Missing `isGeneratedFile`.");
  assert(pageFilesExports.isGeneratedFile !== false, `vite-plugin-ssr was re-installed(/re-built). Restart your app.`);
  assert(pageFilesExports.isGeneratedFile === true, `\`isGeneratedFile === ${pageFilesExports.isGeneratedFile}\``);
  assert(hasProp(pageFilesExports, "pageFilesLazy", "object"));
  assert(hasProp(pageFilesExports, "pageFilesEager", "object"));
  assert(hasProp(pageFilesExports, "pageFilesExportNamesLazy", "object"));
  assert(hasProp(pageFilesExports, "pageFilesExportNamesEager", "object"));
  assert(hasProp(pageFilesExports.pageFilesLazy, ".page"));
  assert(hasProp(pageFilesExports.pageFilesLazy, ".page.client") || hasProp(pageFilesExports.pageFilesLazy, ".page.server"));
  const pageFilesMap = {};
  parseGlobResult(pageFilesExports.pageFilesLazy).forEach(({ filePath, pageFile, globValue }) => {
    var _a;
    pageFile = pageFilesMap[filePath] = (_a = pageFilesMap[filePath]) !== null && _a !== void 0 ? _a : pageFile;
    const loadModule = globValue;
    assertLoadModule(loadModule);
    pageFile.loadFile = async () => {
      if (!("fileExports" in pageFile)) {
        pageFile.fileExports = await loadModule();
        assertExportValues(pageFile);
      }
    };
  });
  parseGlobResult(pageFilesExports.pageFilesExportNamesLazy).forEach(({ filePath, pageFile, globValue }) => {
    var _a;
    pageFile = pageFilesMap[filePath] = (_a = pageFilesMap[filePath]) !== null && _a !== void 0 ? _a : pageFile;
    const loadModule = globValue;
    assertLoadModule(loadModule);
    pageFile.loadExportNames = async () => {
      if (!("exportNames" in pageFile)) {
        const moduleExports = await loadModule();
        assertUsage("exportNames" in moduleExports, "You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3");
        assert(hasProp(moduleExports, "exportNames", "string[]"), pageFile.filePath);
        pageFile.exportNames = moduleExports.exportNames;
      }
    };
  });
  parseGlobResult(pageFilesExports.pageFilesEager).forEach(({ filePath, pageFile, globValue }) => {
    var _a;
    pageFile = pageFilesMap[filePath] = (_a = pageFilesMap[filePath]) !== null && _a !== void 0 ? _a : pageFile;
    const moduleExports = globValue;
    assert(isObject(moduleExports));
    pageFile.fileExports = moduleExports;
  });
  parseGlobResult(pageFilesExports.pageFilesExportNamesEager).forEach(({ filePath, pageFile, globValue }) => {
    var _a;
    pageFile = pageFilesMap[filePath] = (_a = pageFilesMap[filePath]) !== null && _a !== void 0 ? _a : pageFile;
    const moduleExports = globValue;
    assert(isObject(moduleExports));
    assert(hasProp(moduleExports, "exportNames", "string[]"), pageFile.filePath);
    pageFile.exportNames = moduleExports.exportNames;
  });
  const pageFiles2 = Object.values(pageFilesMap);
  pageFiles2.forEach(({ filePath }) => {
    assert(!filePath.includes("\\"));
  });
  return pageFiles2;
}
function parseGlobResult(globObject) {
  const ret = [];
  Object.entries(globObject).forEach(([fileType, globFiles]) => {
    assert(fileTypes.includes(fileType));
    assert(isObject(globFiles));
    Object.entries(globFiles).forEach(([filePath, globValue]) => {
      const pageFile = getPageFileObject(filePath);
      assert(pageFile.fileType === fileType);
      ret.push({ filePath, pageFile, globValue });
    });
  });
  return ret;
}
function assertLoadModule(globValue) {
  assert(isCallable(globValue));
}
const pageFiles = globalThis.__vite_plugin_ssr__pageFiles = globalThis.__vite_plugin_ssr__pageFiles || {
  pageFilesAll: void 0,
  pageFilesGetter: void 0
};
function setPageFiles(pageFilesExports) {
  pageFiles.pageFilesAll = parseGlobResults(pageFilesExports);
}
async function getPageFilesAll(isClientSide, isProduction) {
  if (isClientSide) {
    assert(!pageFiles.pageFilesGetter);
    assert(isProduction === void 0);
  } else {
    assert(pageFiles.pageFilesGetter);
    assert(typeof isProduction === "boolean");
    if (!pageFiles.pageFilesAll || !isProduction) {
      await pageFiles.pageFilesGetter();
    }
  }
  assert(pageFiles.pageFilesAll);
  const pageFilesAll = pageFiles.pageFilesAll;
  const allPageIds = getAllPageIds(pageFilesAll);
  return { pageFilesAll, allPageIds };
}
function getAllPageIds(allPageFiles) {
  const fileIds = allPageFiles.filter(({ isDefaultPageFile }) => !isDefaultPageFile).map(({ filePath }) => filePath).map(determinePageId);
  const allPageIds = unique(fileIds);
  return allPageIds;
}
function getAllPageIdFilesClientSide(pageFilesAll, pageId) {
  return determine(pageFilesAll, pageId, true);
}
function getAllPageIdFilesServerSide(pageFilesAll, pageId) {
  return determine(pageFilesAll, pageId, false);
}
function determine(pageFilesAll, pageId, forClientSide) {
  const fileTypeEnv = forClientSide ? ".page.client" : ".page.server";
  const sorter = defaultFilesSorter(fileTypeEnv, pageId);
  const pageFilesRelevant = pageFilesAll.filter((p) => p.isRelevant(pageId));
  const getRendererFile = (fileType) => pageFilesRelevant.filter((p) => p.isRendererPageFile && p.fileType === fileType).sort(sorter)[0];
  const getPageIdFile = (fileType) => {
    const files = pageFilesRelevant.filter((p) => p.pageId === pageId && p.fileType === fileType);
    assertUsage(files.length <= 1, `Merge the following files into a single file: ${files.map((p) => p.filePath).join(" ")}`);
    const pageIdFile = files[0];
    assert(pageIdFile === void 0 || !pageIdFile.isDefaultPageFile);
    return files[0];
  };
  const defaultFilesNonRenderer = pageFilesRelevant.filter((p) => p.isDefaultPageFile && !p.isRendererPageFile && (p.fileType === fileTypeEnv || p.fileType === ".page"));
  defaultFilesNonRenderer.sort(sorter);
  const rendererFileEnv = getRendererFile(fileTypeEnv);
  const rendererFileIso = getRendererFile(".page");
  const pageIdFileEnv = getPageIdFile(fileTypeEnv);
  const pageIdFileIso = getPageIdFile(".page");
  let pageFiles2 = [pageIdFileEnv, pageIdFileIso, ...defaultFilesNonRenderer, rendererFileEnv, rendererFileIso].filter(isNotNullish);
  return pageFiles2;
}
function defaultFilesSorter(fileTypeEnv, pageId) {
  const e1First = -1;
  const e2First = 1;
  const noOrder = 0;
  return (e1, e2) => {
    assert(e1.isDefaultPageFile && e2.isDefaultPageFile);
    {
      const e1_isRenderer = e1.isRendererPageFile;
      const e2_isRenderer = e2.isRendererPageFile;
      if (!e1_isRenderer && e2_isRenderer) {
        return e1First;
      }
      if (!e2_isRenderer && e1_isRenderer) {
        return e2First;
      }
      assert(e1_isRenderer === e2_isRenderer);
    }
    {
      const e1_distance = getPathDistance(pageId, e1.filePath);
      const e2_distance = getPathDistance(pageId, e2.filePath);
      if (e1_distance < e2_distance) {
        return e1First;
      }
      if (e2_distance < e1_distance) {
        return e2First;
      }
      assert(e1_distance === e2_distance);
    }
    {
      if (e1.fileType === fileTypeEnv && e2.fileType !== fileTypeEnv) {
        return e1First;
      }
      if (e2.fileType === fileTypeEnv && e1.fileType !== fileTypeEnv) {
        return e2First;
      }
    }
    {
      if (e1.fileType === ".page" && e2.fileType !== ".page") {
        return e2First;
      }
      if (e2.fileType === ".page" && e1.fileType !== ".page") {
        return e1First;
      }
    }
    return noOrder;
  };
}
function getPathDistance(pathA, pathB) {
  assertPosixPath(pathA);
  assertPosixPath(pathB);
  assert(pathA.startsWith("/"));
  assert(pathB.startsWith("/"));
  let idx = 0;
  for (; idx < pathA.length && idx < pathB.length; idx++) {
    if (pathA[idx] !== pathB[idx])
      break;
  }
  const pathAWithoutCommon = pathA.slice(idx);
  const pathBWithoutCommon = pathB.slice(idx);
  const distanceA = pathAWithoutCommon.split("/").length;
  const distanceB = pathBWithoutCommon.split("/").length;
  const distance = distanceA + distanceB;
  return distance;
}
function getPageFilesClientSide(pageFilesAll, pageId) {
  return getAllPageIdFilesClientSide(pageFilesAll, pageId);
}
const exportNames$4 = ["render"];
if (import.meta.hot)
  import.meta.hot.accept((mod) => {
    exportNames$4.length = 0;
    exportNames$4.push(...mod.exportNames);
  });
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$4
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$3 = ["passToClient", "render"];
if (import.meta.hot)
  import.meta.hot.accept((mod) => {
    exportNames$3.length = 0;
    exportNames$3.push(...mod.exportNames);
  });
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$3
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$2 = ["onBeforeRender"];
if (import.meta.hot)
  import.meta.hot.accept((mod) => {
    exportNames$2.length = 0;
    exportNames$2.push(...mod.exportNames);
  });
const __vite_glob_3_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$2
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$1 = ["Page"];
if (import.meta.hot)
  import.meta.hot.accept((mod) => {
    exportNames$1.length = 0;
    exportNames$1.push(...mod.exportNames);
  });
const __vite_glob_4_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["Page"];
if (import.meta.hot)
  import.meta.hot.accept((mod) => {
    exportNames.length = 0;
    exportNames.push(...mod.exportNames);
  });
const __vite_glob_4_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
function getCurrentUrl(options) {
  const url = window.location.href;
  const { origin, searchOriginal, hashOriginal, pathnameOriginal } = parseUrl(url, "/");
  let urlCurrent;
  if (options === null || options === void 0 ? void 0 : options.withoutHash) {
    urlCurrent = `${pathnameOriginal}${searchOriginal || ""}`;
    const urlRecreated = `${origin || ""}${urlCurrent}${hashOriginal || ""}`;
    assert(url === urlRecreated, { url, urlRecreated });
  } else {
    urlCurrent = `${pathnameOriginal}${searchOriginal || ""}${hashOriginal || ""}`;
    const urlRecreated = `${origin || ""}${urlCurrent}`;
    assert(url === urlRecreated, { url, urlRecreated });
  }
  return urlCurrent;
}
const types = [
  ts({
    is: (val) => val === void 0,
    match: (str) => str === "!undefined",
    serialize: () => "!undefined",
    deserialize: () => void 0
  }),
  ts({
    is: (val) => val === Infinity,
    match: (str) => str === "!Infinity",
    serialize: () => "!Infinity",
    deserialize: () => Infinity
  }),
  ts({
    is: (val) => val === -Infinity,
    match: (str) => str === "!-Infinity",
    serialize: () => "!-Infinity",
    deserialize: () => -Infinity
  }),
  ts({
    is: (val) => typeof val === "number" && isNaN(val),
    match: (str) => str === "!NaN",
    serialize: () => "!NaN",
    deserialize: () => NaN
  }),
  ts({
    is: (val) => val instanceof Date,
    match: (str) => str.startsWith("!Date:"),
    serialize: (val) => "!Date:" + val.toISOString(),
    deserialize: (str) => new Date(str.slice("!Date:".length))
  }),
  ts({
    is: (val) => typeof val === "bigint",
    match: (str) => str.startsWith("!BigInt:"),
    serialize: (val) => "!BigInt:" + val.toString(),
    deserialize: (str) => {
      if (typeof BigInt === "undefined") {
        throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");
      }
      return BigInt(str.slice("!BigInt:".length));
    }
  }),
  ts({
    is: (val) => val instanceof RegExp,
    match: (str) => str.startsWith("!RegExp:"),
    serialize: (val) => "!RegExp:" + val.toString(),
    deserialize: (str) => {
      str = str.slice("!RegExp:".length);
      const args = str.match(/\/(.*)\/(.*)?/);
      const pattern = args[1];
      const flags = args[2];
      return new RegExp(pattern, flags);
    }
  }),
  ts({
    is: (val) => val instanceof Map,
    match: (str) => str.startsWith("!Map:"),
    serialize: (val, serializer) => "!Map:" + serializer(Array.from(val.entries())),
    deserialize: (str, deserializer) => new Map(deserializer(str.slice("!Map:".length)))
  }),
  ts({
    is: (val) => val instanceof Set,
    match: (str) => str.startsWith("!Set:"),
    serialize: (val, serializer) => "!Set:" + serializer(Array.from(val.values())),
    deserialize: (str, deserializer) => new Set(deserializer(str.slice("!Set:".length)))
  }),
  ts({
    is: (val) => typeof val === "string" && val.startsWith("!"),
    match: (str) => str.startsWith("!"),
    serialize: (val) => "!" + val,
    deserialize: (str) => str.slice(1)
  })
];
function ts(t) {
  return t;
}
function parse(str) {
  const value = JSON.parse(str);
  return modifier(value);
}
function modifier(value) {
  if (typeof value === "string") {
    return reviver(value);
  }
  if (typeof value === "object" && value !== null) {
    Object.entries(value).forEach(([key, val]) => {
      value[key] = modifier(val);
    });
  }
  return value;
}
function reviver(value) {
  for (const { match, deserialize } of types) {
    if (match(value)) {
      return deserialize(value, parse);
    }
  }
  return value;
}
function getPageContextSerializedInHtml() {
  var _a;
  const pageContextJson = (_a = document.getElementById("vite-plugin-ssr_pageContext")) === null || _a === void 0 ? void 0 : _a.textContent;
  assert(pageContextJson);
  const parseResult = parse(pageContextJson);
  assert(hasProp(parseResult, "pageContext", "object"));
  const { pageContext } = parseResult;
  assert(hasProp(pageContext, "_pageId", "string"));
  objectAssign(pageContext, {
    _pageContextRetrievedFromServer: { ...pageContext },
    _comesDirectlyFromServer: true
  });
  return pageContext;
}
function getHook(pageContext, hookName) {
  if (!(hookName in pageContext.exports)) {
    return null;
  }
  const hook = pageContext.exports[hookName];
  const file = pageContext.exportsAll[hookName][0];
  assert(file.exportValue === hook);
  const { filePath } = file;
  assert(filePath);
  assert(!hookName.endsWith(")"));
  assertUsage(isCallable(hook), `\`export { ${hookName} }\` of ${filePath} should be a function`);
  return { hook, filePath };
}
function assertHook(pageContext, hookName) {
  getHook(pageContext, hookName);
}
function sortPageContext(pageContext) {
  const entries = Object.entries(pageContext);
  for (const key in pageContext) {
    delete pageContext[key];
  }
  entries.sort(([key1], [key2]) => compareString(key1, key2)).forEach(([key, val]) => {
    pageContext[key] = val;
  });
}
const globalObject = getGlobalObject("releasePageContextCommon.ts", {});
function releasePageContextCommon(pageContext) {
  assert("exports" in pageContext);
  assert("exportsAll" in pageContext);
  assert("pageExports" in pageContext);
  assert(isObject(pageContext.pageExports));
  const Page = pageContext.exports.Page;
  objectAssign(pageContext, { Page });
  resolveGetters(pageContext);
  sortPageContext(pageContext);
  assert([true, false].includes(pageContext._comesDirectlyFromServer));
  const pageContextReadyForRelease = !pageContext._comesDirectlyFromServer ? pageContext : getProxy(pageContext);
  return pageContextReadyForRelease;
}
const JAVASCRIPT_BUILT_INS = [
  "then",
  "toJSON"
];
const PASS_TO_CLIENT_BUILT_INS = [
  "_pageId"
];
function getProxy(pageContext) {
  return new Proxy(pageContext, { get });
  function isMissing(prop) {
    if (prop in pageContext)
      return false;
    if (JAVASCRIPT_BUILT_INS.includes(prop))
      return false;
    if (typeof prop === "symbol")
      return false;
    if (typeof prop !== "string")
      return false;
    if (prop.startsWith("__v_"))
      return false;
    return true;
  }
  function get(_, prop) {
    if (globalObject.disableAssertPassToClient !== prop) {
      assertPassToClient(pageContext._pageContextRetrievedFromServer, prop, isMissing(prop));
    }
    globalObject.disableAssertPassToClient = prop;
    window.setTimeout(() => {
      globalObject.disableAssertPassToClient = void 0;
    }, 0);
    return pageContext[prop];
  }
}
function assertPassToClient(pageContextRetrievedFromServer, prop, isMissing) {
  if (!isMissing) {
    return;
  }
  if (pageContextRetrievedFromServer === null) {
    return;
  }
  const passToClientInferred = Object.keys(pageContextRetrievedFromServer).filter((prop2) => !PASS_TO_CLIENT_BUILT_INS.includes(prop2));
  assertUsage(false, [
    `\`pageContext.${prop}\` is not available in the browser.`,
    `Make sure that \`passToClient.includes('${prop}')\`.`,
    `(Currently \`passToClient\` is \`[${passToClientInferred.map((prop2) => `'${prop2}'`).join(", ")}]\`.)`,
    "See https://vite-plugin-ssr.com/passToClient"
  ].join(" "));
}
function resolveGetters(pageContext) {
  Object.entries(pageContext).forEach(([key, val]) => {
    delete pageContext[key];
    pageContext[key] = val;
  });
}
const stamp = "__whileFetchingAssets";
async function loadPageFilesClientSide(pageFilesAll, pageId) {
  const pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  try {
    await Promise.all(pageFilesClientSide.map((p) => {
      var _a;
      return (_a = p.loadFile) === null || _a === void 0 ? void 0 : _a.call(p);
    }));
  } catch (err) {
    if (err) {
      Object.assign(err, { [stamp]: true });
    }
    throw err;
  }
  const { exports, exportsAll, pageExports } = getExports(pageFilesClientSide);
  const pageContextAddendum = {
    exports,
    exportsAll,
    pageExports,
    _pageFilesLoaded: pageFilesClientSide
  };
  return pageContextAddendum;
}
function isErrorFetchingStaticAssets(err) {
  if (!err) {
    return false;
  }
  return err[stamp] === true;
}
function assertRenderHook(pageContext) {
  var _a;
  if (hasProp(pageContext.exports, "render")) {
    assertHook(pageContext, "render");
  } else {
    const pageClientsFilesLoaded = pageContext._pageFilesLoaded.filter((p) => p.fileType === ".page.client");
    let errMsg;
    if (pageClientsFilesLoaded.length === 0) {
      const url = (_a = pageContext.urlOriginal) !== null && _a !== void 0 ? _a : window.location.href;
      errMsg = "No file `*.page.client.*` found for URL " + url;
    } else {
      errMsg = "One of the following files should export a `render()` hook: " + pageClientsFilesLoaded.map((p) => p.filePath).join(" ");
    }
    assertUsage(false, errMsg);
  }
}
export {
  getHook as A,
  parse as B,
  assertBaseUrl as C,
  getPageFilesAll as D,
  getPageFilesClientSide as E,
  isParsable as F,
  assertInfo as G,
  isErrorFetchingStaticAssets as H,
  assertHook as I,
  assertRenderHook as J,
  __vite_glob_2_0 as _,
  assert as a,
  isErrorPageId as b,
  assertUsage as c,
  hasProp as d,
  assertWarning as e,
  isObject as f,
  __vite_glob_3_0 as g,
  higherFirst as h,
  isCallable as i,
  __vite_glob_3_1 as j,
  __vite_glob_4_0 as k,
  __vite_glob_4_1 as l,
  makeFirst as m,
  setPageFiles as n,
  objectAssign as o,
  parseUrl as p,
  errorPrefix as q,
  getProjectError as r,
  slice as s,
  getGlobalObject as t,
  getCurrentUrl as u,
  getAllPageIdFilesServerSide as v,
  releasePageContextCommon as w,
  getPageContextSerializedInHtml as x,
  loadPageFilesClientSide as y,
  getErrorPageId as z
};
