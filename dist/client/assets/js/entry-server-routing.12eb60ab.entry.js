function __vite_legacy_guard() {
  import("data:text/javascript,");
}
;
import { _ as __vite_glob_2_0, g as __vite_glob_3_0, j as __vite_glob_3_1, k as __vite_glob_4_0, l as __vite_glob_4_1, n as setPageFiles, a as assert, w as releasePageContextCommon, u as getCurrentUrl, x as getPageContextSerializedInHtml, o as objectAssign, c as assertUsage, D as getPageFilesAll, y as loadPageFilesClientSide, e as assertWarning, J as assertRenderHook, I as assertHook } from "./assertRenderHook.8766fbcf.js";
import { _ as __vitePreload } from "./preload-helper.e1a242f9.js";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/renderer/_error.page.tsx": () => __vitePreload(() => import("./renderer/_error.page.23eb305b.entry.js"), true ? ["assets/js/renderer/_error.page.23eb305b.entry.js","assets/js/jsx-dev-runtime.4156efef.js"] : void 0), "/src/pages/a/index.page.tsx": () => __vitePreload(() => import("./src/pages/a/index.page.ddeddb33.entry.js"), true ? ["assets/js/src/pages/a/index.page.ddeddb33.entry.js","assets/js/jsx-dev-runtime.4156efef.js"] : void 0) });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
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
function releasePageContext(pageContext) {
  assert(pageContext.isHydration === true);
  assert(pageContext.isBackwardNavigation === null);
  return releasePageContextCommon(pageContext);
}
const urlFirst = getCurrentUrl({ withoutHash: true });
async function getPageContext() {
  const pageContext = getPageContextSerializedInHtml();
  objectAssign(pageContext, { isHydration: true, isBackwardNavigation: null });
  objectAssign(pageContext, await loadPageFilesClient(pageContext._pageId));
  assertPristineUrl();
  const pageContextReadyForRelease = releasePageContext(pageContext);
  return pageContextReadyForRelease;
}
function assertPristineUrl() {
  const urlCurrent = getCurrentUrl({ withoutHash: true });
  assertUsage(urlFirst === urlCurrent, `URL manipulated before hydration finished (\`${urlFirst}\` to \`${urlCurrent}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`);
}
async function loadPageFilesClient(pageId) {
  const pageContextAddendum = {};
  const { pageFilesAll } = await getPageFilesAll(true);
  objectAssign(pageContextAddendum, {
    _pageFilesAll: pageFilesAll
  });
  objectAssign(pageContextAddendum, await loadPageFilesClientSide(pageFilesAll, pageId));
  pageFilesAll.filter((p) => p.fileType !== ".page.server").forEach((p) => {
    var _a;
    assertWarning(!((_a = p.fileExports) === null || _a === void 0 ? void 0 : _a.onBeforeRender), `\`export { onBeforeRender }\` of ${p.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`, { onlyOnce: true });
  });
  return pageContextAddendum;
}
hydrate();
async function hydrate() {
  var _a, _b;
  const pageContext = await getPageContext();
  assertRenderHook(pageContext);
  await pageContext.exports.render(pageContext);
  assertHook(pageContext, "onHydrationEnd");
  await ((_b = (_a = pageContext.exports).onHydrationEnd) === null || _b === void 0 ? void 0 : _b.call(_a, pageContext));
}
export {
  __vite_legacy_guard
};
