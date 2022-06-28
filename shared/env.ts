// client & server shared

/**
 * @see https://vitejs.cn/guide/env-and-mode.html#modes
 */

/**
 * @description: Get environment variables
 */
export function getEnv(): string {
  return import.meta.env.MODE
}

/**
 * @description: Is it a development mode
 */
export function isDevMode(): boolean {
  return getEnv() === 'development'
}

/**
 * @description: Is it a production mode
 */
export function isProdMode(): boolean {
  return getEnv() === 'production'
}
