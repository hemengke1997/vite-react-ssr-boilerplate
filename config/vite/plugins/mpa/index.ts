import type { Plugin } from 'vite'
import type { UserOptions } from './lib/options'
import history from 'connect-history-api-fallback'
import { getMPAIO, getHistoryReWriteRuleList, getFirstPage } from './lib/utils'

/**
 * @see https://github.com/IndexXuan/vite-plugin-mpa
 */
export default function mpa(userOptions: UserOptions = {}): Plugin {
  const options = {
    open: '',
    scanDir: 'src/pages',
    scanFile: 'main.{js,ts,jsx,tsx}',
    defaultEntries: '',
    filename: 'index.html',
    rewrites: [],
    root: '',
    ...userOptions,
  }
  if (!options.scanFile.includes('.')) {
    console.error(
      `[vite-plugin-mpa]: scanFile should be something like main.ts/main.{js,ts}/index.js/index{ts,tsx}`,
    )
    process.exit(1)
  }
  return {
    name: "vite:mpa",
    enforce: 'pre',
    config(config) {
      config.build = config.build || {}
      config.build.rollupOptions = config.build.rollupOptions || {}
      config.build.rollupOptions.input = getMPAIO(config.root || process.cwd(), options)
      config.server = config.server || {}
      // default '' means first-page and you can customized or disabled.
      config.server.open =
        options.open === ''
          ? getFirstPage(config.build.rollupOptions.input as Record<string, any>)
          : options.open
    },
    configureServer({ middlewares: app }) {
      app.use(
        // @see https://github.com/vitejs/vite/blob/8733a83d291677b9aff9d7d78797ebb44196596e/packages/vite/src/node/server/index.ts#L433
        // @ts-ignore
        history({
          verbose: Boolean(process.env.DEBUG) && process.env.DEBUG !== 'false',
          disableDotRule: undefined,
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
          rewrites: getHistoryReWriteRuleList(options),
        }),
      )
    },
  }
}

export type { UserOptions as MpaOptions }
