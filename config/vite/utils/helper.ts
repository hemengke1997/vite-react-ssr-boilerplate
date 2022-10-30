import { createHash } from 'node:crypto'
import type { PreRenderedChunk } from 'rollup'

function isObject(value?: any): value is Object {
  return Object.prototype.toString.call(value) === '[Object Object]'
}

export function deepMerge<T = any>(src: T, target: T): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

export function getContentHash(chunk: string | Uint8Array) {
  return createHash('md5').update(chunk).digest('hex').substring(0, 8)
}

export function getHash(chunkInfo: PreRenderedChunk) {
  return getContentHash(
    Object.values(chunkInfo.modules)
      .map((m) => m.code)
      .join(),
  )
}

export function wrapperEnv(envConf: Record<string, any>): ImportMetaEnv {
  const ret: any = {}

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
