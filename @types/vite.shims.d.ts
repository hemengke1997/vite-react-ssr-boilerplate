/// <reference types="vite/client" />

import { Env } from '@root/shared/env'

declare global {
  interface ImportMetaEnv {
    readonly MODE: keyof typeof Env
    readonly VITE_APIPREFIX: string | undefined
    readonly VITE_PROXY: string | undefined
    readonly VITE_BASEURL: string | undefined
    readonly VITE_APIURL: string
    readonly VITE_HOST: string
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export {}
