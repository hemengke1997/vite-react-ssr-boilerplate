import normalize from 'normalize-path'

import { BASE } from './constant'

export function getLibAssets(url: string) {
  return normalize(`${BASE}${url}`)
}

export function isBrowser() {
  return typeof window !== 'undefined' && typeof window.scrollY === 'number'
}
