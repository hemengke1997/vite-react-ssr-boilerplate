// environment: broswer & vite server (not only node)

import { Env } from '@root/shared/enum'

export function getEnv(): string {
  return import.meta.env.MODE
}

export function isDevMode(): boolean {
  return getEnv() === Env.development
}

export function isTestMode(): boolean {
  return getEnv() === Env.test
}

export function isProdMode(): boolean {
  return getEnv() === Env.production
}
