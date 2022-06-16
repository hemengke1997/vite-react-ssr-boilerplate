import type { Plugin } from 'vite'
import MagicString from 'magic-string'
import { parse, compileScript } from '@vue/compiler-sfc'

export interface ExtendOptions {
  name?: boolean
}

function supportScriptName(code: string, id: string) {
  let s: MagicString | undefined
  const str = () => s || (s = new MagicString(code))
  const { descriptor } = parse(code)
  if (!descriptor.script && descriptor.scriptSetup) {
    const result = compileScript(descriptor, { id })
    const name = result.attrs.name
    const lang = result.attrs.lang
    if (name) {
      str().appendLeft(
        0,
        `<script ${lang ? `lang="${lang}"` : ''}>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${name}',
})
</script>\n`,
      )
    }
    return {
      map: str().generateMap(),
      code: str().toString(),
    }
  } else {
    return null
  }
}

export default (options: ExtendOptions = {}): Plugin => {
  return {
    name: 'vite:setup-name',
    enforce: 'pre',
    async transform(code, id) {
      if (!/\.vue$/.test(id)) {
        return null
      }
      const { name = true } = options

      if (name) {
        return supportScriptName.call(this, code, id)
      }
      return null
    },
  }
}
