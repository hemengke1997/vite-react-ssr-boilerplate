export function isObject(obj: Object): obj is Object {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function deepMerge<T = any>(src: T, target: T): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}
