import normalize from 'normalize-path'

import { Env } from './env'

export function getBase() {
  const base = '/base-url/'
  let mode = ''
  if (import.meta.env?.MODE) {
    mode = import.meta.env.MODE
  } else if (typeof process !== 'undefined') {
    mode = process.env.NODE_ENV
  }
  return mode === Env.test ? normalize(`/test${base}`) : base
}

export function getLibAssets(url: string) {
  return normalize(`${getBase()}${url}`)
}

export function isBrowser() {
  return typeof window !== 'undefined' && typeof window.scrollY === 'number'
}
