declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'test' | 'production'
  }
}
