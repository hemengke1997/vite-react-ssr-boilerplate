import { cloneDeep } from 'lodash-es'

function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  const res: any = cloneDeep(src)
  for (key in target) {
    res[key] = isObject(res[key]) ? deepMerge(res[key], target[key]) : (res[key] = target[key])
  }
  return res
}
export function joinTimestamp(join: string, restful = false): string | object {
  if (!join) {
    return restful ? '' : {}
  }
  const now = new Date().getTime()
  if (restful) {
    return `?${join}=${now}`
  }
  return { [join]: now }
}
