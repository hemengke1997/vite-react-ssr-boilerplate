const { setLoaders } = require('../../node_modules/.pnpm/registry.npmmirror.com+vite-plugin-ssr@0.4.48_@minko-fe+vite@3.2.1/node_modules/vite-plugin-ssr/dist/cjs/node/plugin/plugins/importBuild/loadBuild.js');
setLoaders({
  pageFiles: () => import('./pageFiles.js'),
  clientManifest: () => require('../client/manifest.json'),
  pluginManifest: () => require('../client/vite-plugin-ssr.json'),
});
