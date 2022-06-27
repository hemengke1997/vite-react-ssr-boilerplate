declare module 'postcss-viewport-units' {
  import { Plugin } from 'postcss'
  const f: () => Plugin
  export default f
}

declare module 'postcss-px-to-viewport' {
  import { Plugin } from 'postcss'
  const f: (args: any) => Plugin
  export default f
}
