import { createHash } from 'node:crypto'

export function getContentHash(chunk: string | Uint8Array) {
  return createHash('sha256').update(chunk).digest('hex').substring(0, 8)
}

export function injectEnv(envConf: Record<string, any>): ImportMetaEnv {
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
