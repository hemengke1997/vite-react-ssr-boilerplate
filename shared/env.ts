export enum Env {
  development = 'development',
  test = 'test',
  production = 'production',
}

export function getEnv(): string {
  return import.meta.env.MODE
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
