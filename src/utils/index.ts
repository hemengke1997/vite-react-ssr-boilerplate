import { isProdMode } from '@root/shared/env'

export const isBrowser = typeof window !== 'undefined'

export const isNavigator = typeof navigator !== 'undefined'

export function toUrl(url: string) {
  if (url.startsWith('/')) {
    url = url.slice(1)
  }
  if (isProdMode()) {
    return `https://qiyou.cn/${url}`
  } else {
    return `http://webtest.qiyou.cn/${url}`
  }
}
