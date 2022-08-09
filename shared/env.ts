// client & server shared

export function getEnv(): string {
  return import.meta.env.MODE
}

export function isDevMode(): boolean {
  return getEnv() === 'development'
}

export function isProdMode(): boolean {
  return getEnv() === 'production'
}
