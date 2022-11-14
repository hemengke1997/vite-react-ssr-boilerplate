import normalize from 'normalize-path'
import type { loadEnv } from 'vite'
import { Env } from './env'

/**
 * 纯node环境传入loadEnv
 */
export function getBase(load?: typeof loadEnv) {
  const base = `/base-url/`
  let mode = ''
  let p

  if (import.meta.env?.MODE) {
    mode = import.meta.env.MODE
    p = import.meta.env.VITE_BASE_URL
  } else if (typeof process !== 'undefined') {
    mode = process.env.NODE_ENV
    const { VITE_BASE_URL } = (load?.(process.env.NODE_ENV, process.cwd()) as ImportMetaEnv) || process.env
    p = VITE_BASE_URL
  }

  return mode === Env.test ? normalize(`${p ?? ''}${base}`, false) : base
}

export function getLibAssets(url: string) {
  return normalize(`${getBase()}${url}`)
}

export function isBrowser() {
  return typeof window !== 'undefined' && typeof window.scrollY === 'number'
}
