import { createHash } from 'crypto'
import { PreRenderedChunk } from 'rollup'

export function isObject(obj: Object): obj is Object {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function deepMerge<T = any>(src: T, target: T): T {
  let key: string
  for (key in target) {
    // @ts-ignore
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

export function getContentHash(chunk: string | Uint8Array) {
  return createHash('md5').update(chunk).digest('hex').substring(0, 6)
}

export function getHash(chunkInfo: PreRenderedChunk) {
  return getContentHash(
    Object.values(chunkInfo.modules)
      .map((m) => m.code)
      .join(),
  )
}
