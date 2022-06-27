// Load this file if your server code is bundled. For example:
//  - Cloudflare Workers needs the entire worker code to be bundled into a single file.
//  - Vercel bundles serverless functions behind the scenes.

// The path of following dependencies are normally determined dynamically at run-time; this file makes these dependencies discoverable at build-time so that bundlers are able to determine the entire dependency tree.


const { pageFiles } = require("./pageFiles.js");
const clientManifest = require("../client/manifest.json");
const serverManifest = require("../server/manifest.json");
const pluginManifest = require("../client/vite-plugin-ssr.json");
const { __private: { importBuild } } = require("vite-plugin-ssr");
importBuild({ pageFiles, clientManifest, serverManifest, pluginManifest });
