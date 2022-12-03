import { Theme } from '@root/publicTypescript/theme'

declare global {
  const __APP_INFO__: {
    lastBuildTime: string
  }

  interface Window {
    theme: keyof typeof Theme
    disableAnimation(): (() => void) | undefined
  }
}
