import normalize from 'normalize-path'
import { Env } from './env'

export function getBase() {
  const base = `/base-url/`
  let mode = ''
  let p

  if (import.meta.env?.MODE) {
    mode = import.meta.env.MODE
    p = import.meta.env.VITE_BASE_URL
  } else if (typeof process !== 'undefined') {
    mode = process.env.NODE_ENV
    p = process.env.VITE_BASE_URL
  }

  return mode === Env.test ? normalize(`${p ?? ''}${base}`, false) : base
}

export function getLibAssets(url: string) {
  return normalize(`${getBase()}${url}`)
}

export function isBrowser() {
  return typeof window !== 'undefined' && typeof window.scrollY === 'number'
}
