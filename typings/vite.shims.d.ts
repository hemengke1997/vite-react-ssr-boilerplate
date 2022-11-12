/// <reference types="vite/client" />

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  interface ImportMetaEnv {
    readonly VITE_APIPREFIX: string | undefined
    readonly VITE_PROXY: string | undefined
    readonly VITE_APIURL: string
    readonly VITE_HOST: string
  }
}

export {}
