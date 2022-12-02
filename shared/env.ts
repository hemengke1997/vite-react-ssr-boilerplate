import { isNode, isVite } from '.'

export enum Env {
  development = 'development',
  test = 'test',
  production = 'production',
}

export function getEnv() {
  if (isVite()) {
    return import.meta.env.MODE
  }
  if (isNode()) {
    return process.env.NODE_ENV
  }
}

export function isDev(): boolean {
  return getEnv() === Env.development
}

export function isTest(): boolean {
  return getEnv() === Env.test
}

export function isProd(): boolean {
  return getEnv() === Env.production
}
