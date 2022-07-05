export function trackEvent(name: string, type: string = 'click') {
  console.log(name)
  ;(window as any)._hmt?.push(['_trackEvent', name, type, '', ''])
}
export function isObject(val: any): boolean {
  return val !== null && Object.prototype.toString.call(val) === '[object Object]'
}
export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
  }
}
export const isBrowser = typeof window !== 'undefined'

export const isNavigator = typeof navigator !== 'undefined'
