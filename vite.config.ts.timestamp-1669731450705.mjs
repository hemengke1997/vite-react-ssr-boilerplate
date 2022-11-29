// vite.config.ts
import path2 from 'node:path'
import dayjs from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+dayjs@1.11.6/node_modules/dayjs/dayjs.min.js'
import { loadEnv } from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+@minko-fe+vite@3.2.1_terser@5.16.0/node_modules/@minko-fe/vite/dist/node/index.js'

// config/vite/plugins/index.ts
import legacy from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-legacy@2.3.1_w5oma2itcr6vykegzswaydpgoi/node_modules/@vitejs/plugin-legacy/dist/index.mjs'
import react from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react@2.2.0_@minko-fe+vite@3.2.1/node_modules/@vitejs/plugin-react/dist/index.mjs'
import ssr from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-ssr@0.4.52_@minko-fe+vite@3.2.1/node_modules/vite-plugin-ssr/dist/cjs/node/plugin/index.js'
import { publicTypescript } from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-public-typescript@1.0.0_@minko-fe+vite@3.2.1/node_modules/vite-plugin-public-typescript/dist/index.js'
import timeReporter from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-time-reporter@2.0.0_@minko-fe+vite@3.2.1/node_modules/vite-plugin-time-reporter/dist/index.js'
import browserslist from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+browserslist@4.21.4/node_modules/browserslist/index.js'

// config/vite/plugins/visualizer/index.ts
import visualizer from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+rollup-plugin-visualizer@5.8.3_rollup@2.79.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js'
function isReportMode() {
  return process.env.REPORT === 'true'
}
function configVisualizerConfig() {
  if (isReportMode()) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  }
  return []
}

// config/vite/plugins/index.ts
var browserslistConfig = browserslist.loadConfig({ path: '.' })
function setupVitePlugins({ isBuild, ssrBuild, mode: _mode }) {
  const vitePlugins = [
    react(),
    ssr({
      disableAutoFullBuild: true,
      includeAssetsImportedByServer: false,
    }),
    configVisualizerConfig(),
    publicTypescript({
      ssrBuild,
      inputDir: 'publicTypescript',
      outputDir: 'lib',
      esbuildOptions: {
        target: 'es2015',
      },
    }),
    timeReporter(),
  ]
  isBuild &&
    vitePlugins.push(
      legacy({
        targets: browserslistConfig,
        modernPolyfills: ['es.global-this'],
        polyfills: true,
        renderLegacyChunks: true,
      }),
    )
  return vitePlugins
}

// config/vite/rollupOptions/index.ts
import path from 'node:path'
import { normalizePath } from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+@minko-fe+vite@3.2.1_terser@5.16.0/node_modules/@minko-fe/vite/dist/node/index.js'
function setupRollupOptions(root, ssrBuild) {
  return {
    output: {
      format: 'es',
      assetFileNames: (assetInfo) => {
        let extType = path.extname(assetInfo.name || '').split('.')[1]
        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
          extType = 'img'
        }
        if (extType === 'img' && assetInfo.name) {
          const assetPath = path.relative(root, assetInfo.name)
          const dir = path.dirname(assetPath)
          if (dir) {
            return normalizePath(`assets/${extType}/${dir}/[name].[hash][extname]`)
          }
        }
        return `assets/${extType}/[name].[hash][extname]`
      },
      chunkFileNames: (chunkInfo) => {
        var _a, _b
        const chunkName = chunkInfo.name
        const server = (chunkName == null ? void 0 : chunkName.endsWith('server')) ? 'server.' : ''
        const name = ssrBuild
          ? ((_b = (_a = chunkInfo.facadeModuleId) == null ? void 0 : _a.match(/src\/pages\/(.*?)\//)) == null
              ? void 0
              : _b[1]) || chunkName
          : chunkName
        return `assets/js/${name}.${server}[hash].js`
      },
      entryFileNames: (chunkInfo) => {
        const chunkName = chunkInfo.name
        if (chunkName === 'pageFiles') {
          return '[name].js'
        }
        return `assets/js/[name].[hash].entry.js`
      },
    },
  }
}

// config/vite/utils/helper.ts
import { createHash } from 'node:crypto'
import { isObject } from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js'
function injectEnv(envConf) {
  const ret = {}
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName
    ret[envName] = realName
    if (typeof realName === 'string') {
      process.env[envName] = realName
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  return ret
}

// shared/index.ts
import normalize from 'file:///E:/github/vite-react-ssr-boilerplate/node_modules/.pnpm/registry.npmmirror.com+normalize-path@3.0.0/node_modules/normalize-path/index.js'
function getBase() {
  var _a
  let p
  if ((_a = import.meta.env) == null ? void 0 : _a.MODE) {
    p = import.meta.env.VITE_BASEURL
  } else if (typeof process !== 'undefined') {
    p = process.env.VITE_BASEURL
  }
  return normalize(`${p ?? '/'}`, false)
}

// vite.config.ts
var __vite_injected_original_dirname = 'E:\\github\\vite-react-ssr-boilerplate'
var __APP_INFO__ = {
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
}
var vite_config_default = ({ command, ssrBuild, mode }) => {
  const root = process.cwd()
  const isBuild = command === 'build'
  const env = loadEnv(mode, root)
  injectEnv(env)
  return {
    base: getBase(),
    mode,
    plugins: [
      setupVitePlugins({
        isBuild,
        ssrBuild: ssrBuild ?? false,
        mode,
      }),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: path2.resolve(__vite_injected_original_dirname, './src') },
        {
          find: '@root',
          replacement: path2.resolve(__vite_injected_original_dirname),
        },
        {
          find: /^~/,
          replacement: `${path2.resolve(__vite_injected_original_dirname, './node_modules')}/`,
        },
      ],
    },
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:6]',
      },
    },
    define: {
      'process.env': process.env,
      '__APP_INFO__': JSON.stringify(__APP_INFO__),
    },
    ssr: {
      optimizeDeps: {
        disabled: 'build',
      },
      noExternal: isBuild ? ['react-vant'] : [],
    },
    optimizeDeps: {
      include: ['antd/locale/en_US'],
    },
    build: {
      emptyOutDir: true,
      cssCodeSplit: true,
      minify: 'esbuild',
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2048,
      rollupOptions: setupRollupOptions(root, ssrBuild),
    },
  }
}
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiY29uZmlnL3ZpdGUvcGx1Z2lucy9pbmRleC50cyIsICJjb25maWcvdml0ZS9wbHVnaW5zL3Zpc3VhbGl6ZXIvaW5kZXgudHMiLCAiY29uZmlnL3ZpdGUvcm9sbHVwT3B0aW9ucy9pbmRleC50cyIsICJjb25maWcvdml0ZS91dGlscy9oZWxwZXIudHMiLCAic2hhcmVkL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcZ2l0aHViXFxcXHZpdGUtcmVhY3Qtc3NyLWJvaWxlcnBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxnaXRodWJcXFxcdml0ZS1yZWFjdC1zc3ItYm9pbGVycGxhdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2dpdGh1Yi92aXRlLXJlYWN0LXNzci1ib2lsZXJwbGF0ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG5pbXBvcnQgdHlwZSB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBzZXR1cFZpdGVQbHVnaW5zIH0gZnJvbSAnLi9jb25maWcvdml0ZS9wbHVnaW5zJ1xyXG5pbXBvcnQgeyBzZXR1cFJvbGx1cE9wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy92aXRlL3JvbGx1cE9wdGlvbnMnXHJcbmltcG9ydCB7IGluamVjdEVudiB9IGZyb20gJy4vY29uZmlnL3ZpdGUvdXRpbHMvaGVscGVyJ1xyXG5pbXBvcnQgdHlwZSB7IEVudiB9IGZyb20gJy4vc2hhcmVkL2VudidcclxuaW1wb3J0IHsgZ2V0QmFzZSB9IGZyb20gJy4vc2hhcmVkJ1xyXG5cclxuY29uc3QgX19BUFBfSU5GT19fID0ge1xyXG4gIGxhc3RCdWlsZFRpbWU6IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNvbW1hbmQsIHNzckJ1aWxkLCBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xyXG4gIGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXHJcblxyXG4gIGNvbnN0IGlzQnVpbGQgPSBjb21tYW5kID09PSAnYnVpbGQnXHJcblxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcm9vdCkgYXMgSW1wb3J0TWV0YUVudlxyXG5cclxuICBpbmplY3RFbnYoZW52KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYmFzZTogZ2V0QmFzZSgpLFxyXG4gICAgbW9kZSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgc2V0dXBWaXRlUGx1Z2lucyh7XHJcbiAgICAgICAgaXNCdWlsZCxcclxuICAgICAgICBzc3JCdWlsZDogc3NyQnVpbGQgPz8gZmFsc2UsXHJcbiAgICAgICAgbW9kZTogbW9kZSBhcyBFbnYsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IFtcclxuICAgICAgICB7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmluZDogJ0Byb290JyxcclxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpbmQ6IC9efi8sXHJcbiAgICAgICAgICByZXBsYWNlbWVudDogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vbm9kZV9tb2R1bGVzJyl9L2AsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgIGdlbmVyYXRlU2NvcGVkTmFtZTogJ1tsb2NhbF1fX1toYXNoOmJhc2U2NDo2XScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52LFxyXG4gICAgICAnX19BUFBfSU5GT19fJzogSlNPTi5zdHJpbmdpZnkoX19BUFBfSU5GT19fKSxcclxuICAgIH0sXHJcbiAgICBzc3I6IHtcclxuICAgICAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICAgICAgZGlzYWJsZWQ6ICdidWlsZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vRXh0ZXJuYWw6IGlzQnVpbGQgPyBbJ3JlYWN0LXZhbnQnXSA6IFtdLFxyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICBpbmNsdWRlOiBbJ2FudGQvbG9jYWxlL2VuX1VTJ10sXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcclxuICAgICAgbWluaWZ5OiAnZXNidWlsZCcsXHJcbiAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcclxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDQ4LFxyXG4gICAgICByb2xsdXBPcHRpb25zOiBzZXR1cFJvbGx1cE9wdGlvbnMocm9vdCwgc3NyQnVpbGQpLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxnaXRodWJcXFxcdml0ZS1yZWFjdC1zc3ItYm9pbGVycGxhdGVcXFxcY29uZmlnXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcZ2l0aHViXFxcXHZpdGUtcmVhY3Qtc3NyLWJvaWxlcnBsYXRlXFxcXGNvbmZpZ1xcXFx2aXRlXFxcXHBsdWdpbnNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2dpdGh1Yi92aXRlLXJlYWN0LXNzci1ib2lsZXJwbGF0ZS9jb25maWcvdml0ZS9wbHVnaW5zL2luZGV4LnRzXCI7aW1wb3J0IGxlZ2FjeSBmcm9tICdAdml0ZWpzL3BsdWdpbi1sZWdhY3knXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgc3NyIGZyb20gJ3ZpdGUtcGx1Z2luLXNzci9wbHVnaW4nXHJcbmltcG9ydCB0eXBlIHsgRW52IH0gZnJvbSAnQHJvb3Qvc2hhcmVkL2VudidcclxuaW1wb3J0IHsgcHVibGljVHlwZXNjcmlwdCB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB1YmxpYy10eXBlc2NyaXB0J1xyXG5pbXBvcnQgdGltZVJlcG9ydGVyIGZyb20gJ3ZpdGUtcGx1Z2luLXRpbWUtcmVwb3J0ZXInXHJcbmltcG9ydCBicm93c2Vyc2xpc3QgZnJvbSAnYnJvd3NlcnNsaXN0J1xyXG5cclxuaW1wb3J0IHsgY29uZmlnVmlzdWFsaXplckNvbmZpZyB9IGZyb20gJy4vdmlzdWFsaXplcidcclxuXHJcbmNvbnN0IGJyb3dzZXJzbGlzdENvbmZpZyA9IGJyb3dzZXJzbGlzdC5sb2FkQ29uZmlnKHsgcGF0aDogJy4nIH0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBWaXRlUGx1Z2lucyh7XHJcbiAgaXNCdWlsZCxcclxuICBzc3JCdWlsZCxcclxuICBtb2RlOiBfbW9kZSxcclxufToge1xyXG4gIGlzQnVpbGQ6IGJvb2xlYW5cclxuICBzc3JCdWlsZDogYm9vbGVhblxyXG4gIG1vZGU6IGtleW9mIHR5cGVvZiBFbnZcclxufSkge1xyXG4gIGNvbnN0IHZpdGVQbHVnaW5zOiBQbHVnaW5PcHRpb25bXSA9IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBzc3Ioe1xyXG4gICAgICBkaXNhYmxlQXV0b0Z1bGxCdWlsZDogdHJ1ZSxcclxuICAgICAgaW5jbHVkZUFzc2V0c0ltcG9ydGVkQnlTZXJ2ZXI6IGZhbHNlLFxyXG4gICAgfSksXHJcbiAgICBjb25maWdWaXN1YWxpemVyQ29uZmlnKCksXHJcbiAgICBwdWJsaWNUeXBlc2NyaXB0KHtcclxuICAgICAgc3NyQnVpbGQsXHJcbiAgICAgIGlucHV0RGlyOiAncHVibGljVHlwZXNjcmlwdCcsXHJcbiAgICAgIG91dHB1dERpcjogJ2xpYicsXHJcbiAgICAgIGVzYnVpbGRPcHRpb25zOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnZXMyMDE1JyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgdGltZVJlcG9ydGVyKCksXHJcbiAgXVxyXG5cclxuICBpc0J1aWxkICYmXHJcbiAgICB2aXRlUGx1Z2lucy5wdXNoKFxyXG4gICAgICBsZWdhY3koe1xyXG4gICAgICAgIHRhcmdldHM6IGJyb3dzZXJzbGlzdENvbmZpZyxcclxuICAgICAgICBtb2Rlcm5Qb2x5ZmlsbHM6IFsnZXMuZ2xvYmFsLXRoaXMnXSxcclxuICAgICAgICBwb2x5ZmlsbHM6IHRydWUsXHJcbiAgICAgICAgcmVuZGVyTGVnYWN5Q2h1bmtzOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgIClcclxuXHJcbiAgcmV0dXJuIHZpdGVQbHVnaW5zXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxnaXRodWJcXFxcdml0ZS1yZWFjdC1zc3ItYm9pbGVycGxhdGVcXFxcY29uZmlnXFxcXHZpdGVcXFxccGx1Z2luc1xcXFx2aXN1YWxpemVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxnaXRodWJcXFxcdml0ZS1yZWFjdC1zc3ItYm9pbGVycGxhdGVcXFxcY29uZmlnXFxcXHZpdGVcXFxccGx1Z2luc1xcXFx2aXN1YWxpemVyXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9naXRodWIvdml0ZS1yZWFjdC1zc3ItYm9pbGVycGxhdGUvY29uZmlnL3ZpdGUvcGx1Z2lucy92aXN1YWxpemVyL2luZGV4LnRzXCI7aW1wb3J0IHZpc3VhbGl6ZXIgZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwb3J0TW9kZSgpOiBib29sZWFuIHtcclxuICByZXR1cm4gcHJvY2Vzcy5lbnYuUkVQT1JUID09PSAndHJ1ZSdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ1Zpc3VhbGl6ZXJDb25maWcoKSB7XHJcbiAgaWYgKGlzUmVwb3J0TW9kZSgpKSB7XHJcbiAgICByZXR1cm4gdmlzdWFsaXplcih7XHJcbiAgICAgIGZpbGVuYW1lOiAnLi9ub2RlX21vZHVsZXMvLmNhY2hlL3Zpc3VhbGl6ZXIvc3RhdHMuaHRtbCcsXHJcbiAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIGd6aXBTaXplOiB0cnVlLFxyXG4gICAgICBicm90bGlTaXplOiB0cnVlLFxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIFtdXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxnaXRodWJcXFxcdml0ZS1yZWFjdC1zc3ItYm9pbGVycGxhdGVcXFxcY29uZmlnXFxcXHZpdGVcXFxccm9sbHVwT3B0aW9uc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcZ2l0aHViXFxcXHZpdGUtcmVhY3Qtc3NyLWJvaWxlcnBsYXRlXFxcXGNvbmZpZ1xcXFx2aXRlXFxcXHJvbGx1cE9wdGlvbnNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2dpdGh1Yi92aXRlLXJlYWN0LXNzci1ib2lsZXJwbGF0ZS9jb25maWcvdml0ZS9yb2xsdXBPcHRpb25zL2luZGV4LnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgdHlwZSB7IFJvbGx1cE9wdGlvbnMgfSBmcm9tICdyb2xsdXAnXHJcbmltcG9ydCB7IG5vcm1hbGl6ZVBhdGggfSBmcm9tICd2aXRlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwUm9sbHVwT3B0aW9ucyhyb290OiBzdHJpbmcsIHNzckJ1aWxkOiBib29sZWFuIHwgdW5kZWZpbmVkKTogUm9sbHVwT3B0aW9ucyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG91dHB1dDoge1xyXG4gICAgICBmb3JtYXQ6ICdlcycsXHJcbiAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XHJcbiAgICAgICAgbGV0IGV4dFR5cGUgPSBwYXRoLmV4dG5hbWUoYXNzZXRJbmZvLm5hbWUgfHwgJycpLnNwbGl0KCcuJylbMV1cclxuICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljby9pLnRlc3QoZXh0VHlwZSEpKSB7XHJcbiAgICAgICAgICBleHRUeXBlID0gJ2ltZydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4dFR5cGUgPT09ICdpbWcnICYmIGFzc2V0SW5mby5uYW1lKSB7XHJcbiAgICAgICAgICBjb25zdCBhc3NldFBhdGggPSBwYXRoLnJlbGF0aXZlKHJvb3QsIGFzc2V0SW5mby5uYW1lKVxyXG4gICAgICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0UGF0aClcclxuXHJcbiAgICAgICAgICBpZiAoZGlyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVQYXRoKGBhc3NldHMvJHtleHRUeXBlfS8ke2Rpcn0vW25hbWVdLltoYXNoXVtleHRuYW1lXWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgYXNzZXRzLyR7ZXh0VHlwZX0vW25hbWVdLltoYXNoXVtleHRuYW1lXWBcclxuICAgICAgfSxcclxuICAgICAgY2h1bmtGaWxlTmFtZXM6IChjaHVua0luZm8pID0+IHtcclxuICAgICAgICBjb25zdCBjaHVua05hbWUgPSBjaHVua0luZm8ubmFtZVxyXG4gICAgICAgIGNvbnN0IHNlcnZlciA9IGNodW5rTmFtZT8uZW5kc1dpdGgoJ3NlcnZlcicpID8gJ3NlcnZlci4nIDogJydcclxuICAgICAgICBjb25zdCBuYW1lID0gc3NyQnVpbGQgPyBjaHVua0luZm8uZmFjYWRlTW9kdWxlSWQ/Lm1hdGNoKC9zcmNcXC9wYWdlc1xcLyguKj8pXFwvLyk/LlsxXSB8fCBjaHVua05hbWUgOiBjaHVua05hbWVcclxuICAgICAgICAvLyBpZiAoY2h1bmtJbmZvLmlzRHluYW1pY0VudHJ5KSB7XHJcbiAgICAgICAgLy8gICByZXR1cm4gYGFzc2V0cy9qcy8ke25hbWV9LiR7c2VydmVyfVtoYXNoXS5qc2BcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIGBhc3NldHMvanMvJHtuYW1lfS4ke3NlcnZlcn1baGFzaF0uanNgXHJcbiAgICAgIH0sXHJcbiAgICAgIGVudHJ5RmlsZU5hbWVzOiAoY2h1bmtJbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2h1bmtOYW1lID0gY2h1bmtJbmZvLm5hbWVcclxuXHJcbiAgICAgICAgaWYgKGNodW5rTmFtZSA9PT0gJ3BhZ2VGaWxlcycpIHtcclxuICAgICAgICAgIHJldHVybiAnW25hbWVdLmpzJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYGFzc2V0cy9qcy9bbmFtZV0uW2hhc2hdLmVudHJ5LmpzYFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxnaXRodWJcXFxcdml0ZS1yZWFjdC1zc3ItYm9pbGVycGxhdGVcXFxcY29uZmlnXFxcXHZpdGVcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGdpdGh1YlxcXFx2aXRlLXJlYWN0LXNzci1ib2lsZXJwbGF0ZVxcXFxjb25maWdcXFxcdml0ZVxcXFx1dGlsc1xcXFxoZWxwZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2dpdGh1Yi92aXRlLXJlYWN0LXNzci1ib2lsZXJwbGF0ZS9jb25maWcvdml0ZS91dGlscy9oZWxwZXIudHNcIjtpbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnbm9kZTpjcnlwdG8nXHJcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnbG9kYXNoLWVzJ1xyXG5pbXBvcnQgdHlwZSB7IFByZVJlbmRlcmVkQ2h1bmsgfSBmcm9tICdyb2xsdXAnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlPFQgPSBhbnk+KHNyYzogVCwgdGFyZ2V0OiBUKTogVCB7XHJcbiAgbGV0IGtleTogc3RyaW5nXHJcbiAgZm9yIChrZXkgaW4gdGFyZ2V0KSB7XHJcbiAgICBzcmNba2V5XSA9IGlzT2JqZWN0KHNyY1trZXldKSA/IGRlZXBNZXJnZShzcmNba2V5XSwgdGFyZ2V0W2tleV0pIDogKHNyY1trZXldID0gdGFyZ2V0W2tleV0pXHJcbiAgfVxyXG4gIHJldHVybiBzcmNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnRIYXNoKGNodW5rOiBzdHJpbmcgfCBVaW50OEFycmF5KSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShjaHVuaykuZGlnZXN0KCdoZXgnKS5zdWJzdHJpbmcoMCwgOClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhc2goY2h1bmtJbmZvOiBQcmVSZW5kZXJlZENodW5rKSB7XHJcbiAgcmV0dXJuIGdldENvbnRlbnRIYXNoKFxyXG4gICAgT2JqZWN0LnZhbHVlcyhjaHVua0luZm8ubW9kdWxlcylcclxuICAgICAgLm1hcCgobSkgPT4gbS5jb2RlKVxyXG4gICAgICAuam9pbigpLFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdEVudihlbnZDb25mOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogSW1wb3J0TWV0YUVudiB7XHJcbiAgY29uc3QgcmV0OiBhbnkgPSB7fVxyXG5cclxuICBmb3IgKGNvbnN0IGVudk5hbWUgb2YgT2JqZWN0LmtleXMoZW52Q29uZikpIHtcclxuICAgIGxldCByZWFsTmFtZSA9IGVudkNvbmZbZW52TmFtZV0ucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXHJcbiAgICByZWFsTmFtZSA9IHJlYWxOYW1lID09PSAndHJ1ZScgPyB0cnVlIDogcmVhbE5hbWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHJlYWxOYW1lXHJcblxyXG4gICAgcmV0W2Vudk5hbWVdID0gcmVhbE5hbWVcclxuICAgIGlmICh0eXBlb2YgcmVhbE5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHByb2Nlc3MuZW52W2Vudk5hbWVdID0gcmVhbE5hbWVcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWxOYW1lID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBwcm9jZXNzLmVudltlbnZOYW1lXSA9IEpTT04uc3RyaW5naWZ5KHJlYWxOYW1lKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcZ2l0aHViXFxcXHZpdGUtcmVhY3Qtc3NyLWJvaWxlcnBsYXRlXFxcXHNoYXJlZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcZ2l0aHViXFxcXHZpdGUtcmVhY3Qtc3NyLWJvaWxlcnBsYXRlXFxcXHNoYXJlZFxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZ2l0aHViL3ZpdGUtcmVhY3Qtc3NyLWJvaWxlcnBsYXRlL3NoYXJlZC9pbmRleC50c1wiO2ltcG9ydCBub3JtYWxpemUgZnJvbSAnbm9ybWFsaXplLXBhdGgnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZSgpIHtcclxuICBsZXQgcFxyXG4gIGlmIChpbXBvcnQubWV0YS5lbnY/Lk1PREUpIHtcclxuICAgIHAgPSBpbXBvcnQubWV0YS5lbnYuVklURV9CQVNFVVJMXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHAgPSBwcm9jZXNzLmVudi5WSVRFX0JBU0VVUkxcclxuICB9XHJcblxyXG4gIHJldHVybiBub3JtYWxpemUoYCR7cCA/PyAnLyd9YCwgZmFsc2UpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWJBc3NldHModXJsOiBzdHJpbmcpIHtcclxuICByZXR1cm4gbm9ybWFsaXplKGAke2dldEJhc2UoKX0ke3VybH1gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCkge1xyXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnNjcm9sbFkgPT09ICdudW1iZXInXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxPQUFPQSxXQUFVO0FBQ3JULE9BQU8sV0FBVztBQUVsQixTQUFTLGVBQWU7OztBQ0hrVSxPQUFPLFlBQVk7QUFDN1csT0FBTyxXQUFXO0FBRWxCLE9BQU8sU0FBUztBQUVoQixTQUFTLHdCQUF3QjtBQUNqQyxPQUFPLGtCQUFr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
