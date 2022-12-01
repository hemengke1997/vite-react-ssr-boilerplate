import { Theme } from '@root/renderer/theme'

declare global {
  const __APP_INFO__: {
    lastBuildTime: string
  }

  interface Window {
    theme: keyof typeof Theme
  }
}
