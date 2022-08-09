interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly DEV: boolean
  readonly PROD: boolean
  readonly MODE: string
  // host
  readonly VITE_HOST: string
  readonly VITE_STAGE: 'TEST' | 'RELEASE'
  readonly VITE_LEGACY: boolean
}
