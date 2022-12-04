import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'
import fs from 'fs-extra'
import { normalizePath } from 'vite'
import fg from 'fast-glob'
import { getTsconfig } from 'get-tsconfig'

const { sync: glob } = fg

const dir = path.dirname(fileURLToPath(import.meta.url))

const tsconfig = path.resolve(dir, './tsconfig.server.json')

const tsconfigData = getTsconfig(tsconfig)

const compilerOptions = tsconfigData?.config.compilerOptions

async function bundle(entry: string, out: string) {
  const pathKeys = Object.keys(compilerOptions?.paths || {}).filter((t) => t.startsWith('@'))

  const re = new RegExp(`^(${pathKeys.join('|')})`)

  const result = await build({
    entryPoints: [entry],
    outfile: 'index.js',
    write: false,
    platform: 'node',
    bundle: true,
    format: 'esm',
    sourcemap: false,
    treeShaking: true,
    splitting: false,
    banner: {
      js: `/* eslint-disable */\n"use strict";\n`,
    },
    tsconfig,
    plugins: [
      {
        name: 'ts-paths',
        setup(build) {
          build.onResolve({ filter: re }, (args) => {
            const pathKey = pathKeys.find((pkey) => new RegExp(`^${pkey.replaceAll('*', '')}`).test(args.path))
            if (!pathKey) return { path: args.path }
            const [pathDir] = pathKey?.split('*')
            let file = args.path.replace(pathDir, '')
            if (file === args.path) {
              file = ''
            }
            for (const dir of compilerOptions!.paths![pathKey]) {
              const fileDir = normalizePath(path.resolve(process.cwd(), dir).replace('*', file))
              let [matchedFile] = glob(`${fileDir}.*`)
              if (!matchedFile) {
                const [matchIndexFile] = glob(`${fileDir}/index.*`)
                matchedFile = matchIndexFile
              }
              if (matchedFile) {
                return { path: matchedFile }
              }
            }
            return { path: args.path }
          })
        },
      },
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            const id = args.path
            if (id[0] !== '.' && !path.isAbsolute(id)) {
              return {
                external: true,
                sideEffects: false,
              }
            }
          })
        },
      },
    ],
  })
  const { text } = result.outputFiles[0]
  const filePath = out
  if (fs.existsSync(filePath)) {
    await fs.remove(filePath)
  }
  await fs.ensureDir(path.dirname(filePath))
  await fs.writeFile(filePath, text)
}

export { bundle }

export function bundleScript(targetDir?: string, fileName?: string) {
  if (!targetDir) return
  targetDir = path.resolve(`${dir}/../`, targetDir)
  bundle(path.join(targetDir, `${fileName}.ts`), path.join(targetDir, `${fileName}.js`))
}
