import path from 'node:path'
import type { HtmlTagDescriptor } from 'vite'
import fg from 'fast-glob'
import { getBase } from '@root/shared'

const legacyPolyfillId = 'vite-legacy-polyfill'
const legacyEntryId = 'vite-legacy-entry'

const detectModernBrowserVarName = '__vite_is_modern_browser'

const detectModernBrowserCode = `try{import.meta.url;import("_").catch(()=>1);}catch(e){}window.${detectModernBrowserVarName}=true;`

const systemJSInlineCode = `System.import(document.getElementById('${legacyEntryId}').getAttribute('data-src'))`

const dynamicFallbackInlineCode = `!function(){if(window.${detectModernBrowserVarName})return;console.warn("vite: loading legacy build because dynamic import or import.meta.url is unsupported, syntax error above should be ignored");var e=document.getElementById("${legacyPolyfillId}"),n=document.createElement("script");n.src=e.src,n.onload=function(){${systemJSInlineCode}},document.body.appendChild(n)}();`

const safari10NoModuleFix = `!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();`

// cache
const tags: HtmlTagDescriptor[] = []

export async function legacyHtml(pageContext: Record<string, any> | undefined, html: string) {
  if (!tags.length) {
    // lookup modern polyfills
    const files = fg.sync(`dist/client/assets/js/polyfills.*.entry.js`, {
      onlyFiles: true,
      unique: true,
      deep: 1,
    })

    const modernPolyfill = `${getBase()}${files[0].replace(`dist/client/`, '')}`

    // 1. inject modern polyfills
    tags.push({
      tag: 'script',
      attrs: {
        type: 'module',
        crossorigin: true,
        src: modernPolyfill,
      },
      injectTo: 'head-prepend',
    })

    // 2. inject Safari 10 nomodule fix
    tags.push({
      tag: 'script',
      attrs: { nomodule: true },
      children: safari10NoModuleFix,
      injectTo: 'body',
    })

    // lookup legacy
    const manifest = pageContext?._manifestClient
    const ks = Object.keys(pageContext?._manifestClient)

    const entryJs = pageContext?._pageAssets
      ?.filter((t) => t.mediaType === 'text/javascript')
      .map((s) => {
        if (s) {
          return {
            ...s,
            src: s?.src?.replace(new RegExp(getBase()), ''),
          }
        }
        return s
      })
      .find((entry) => entry?.src.includes('.entry.js') && entry?.preloadType === null) as {
      src?: string
    }

    // 3. inject legacy polyfills
    for (let i = 0; i < ks.length; i++) {
      const { file, isEntry } = manifest[ks[i]]
      const parsed = path.parse(file)
      const realName = parsed.name.slice(0, parsed.name.indexOf('.'))
      if (realName.includes('polyfills-legacy') && isEntry) {
        tags.push({
          tag: 'script',
          attrs: {
            nomodule: true,
            crossorigin: true,
            src: `${getBase()}${file}`,
            id: legacyPolyfillId,
          },
          injectTo: 'body',
        })
        break
      }
    }

    // 4. inject legacy entry
    for (let i = 0; i < ks.length; i++) {
      const k = ks[i]
      const parsed = path.parse(entryJs?.src || '')

      const entryJsName = parsed.name.slice(0, parsed.name.indexOf('.'))

      const target = manifest[k].file as string

      if (new RegExp(`${parsed.dir}/${entryJsName}(\.+)(.+)${parsed.ext}$`, 'gi').test(target)) {
        tags.push({
          tag: 'script',
          attrs: {
            'nomodule': true,
            'crossorigin': true,
            'data-src': `${getBase()}${target}`,
            'id': legacyEntryId,
          },
          injectTo: 'body',
          children: systemJSInlineCode,
        })
        break
      }
    }

    // 5. inject dynamic import fallback entry
    tags.push({
      tag: 'script',
      attrs: { type: 'module' },
      children: detectModernBrowserCode,
      injectTo: 'head',
    })
    tags.push({
      tag: 'script',
      attrs: { type: 'module' },
      children: dynamicFallbackInlineCode,
      injectTo: 'head',
    })
  }

  const headTags: HtmlTagDescriptor[] = []
  const headPrependTags: HtmlTagDescriptor[] = []
  const bodyTags: HtmlTagDescriptor[] = []
  const bodyPrependTags: HtmlTagDescriptor[] = []

  for (const tag of tags) {
    if (tag.injectTo === 'body') {
      bodyTags.push(tag)
    } else if (tag.injectTo === 'body-prepend') {
      bodyPrependTags.push(tag)
    } else if (tag.injectTo === 'head') {
      headTags.push(tag)
    } else {
      headPrependTags.push(tag)
    }
  }

  html = injectToHead(html, headPrependTags, true)
  html = injectToHead(html, headTags)
  html = injectToBody(html, bodyPrependTags, true)
  html = injectToBody(html, bodyTags)

  return html
}

const headInjectRE = /([ \t]*)<\/head>/i

const headPrependInjectRE = /([ \t]*)<head[^>]*>/i

const htmlInjectRE = /<\/html>/i
const htmlPrependInjectRE = /([ \t]*)<html[^>]*>/i

const bodyInjectRE = /([ \t]*)<\/body>/i
const bodyPrependInjectRE = /([ \t]*)<body[^>]*>/i

const doctypePrependInjectRE = /<!doctype html>/i

function serializeTags(tags: HtmlTagDescriptor['children'], indent = ''): string {
  if (typeof tags === 'string') {
    return tags
  } else if (tags && tags.length) {
    return tags.map((tag) => `${indent}${serializeTag(tag, indent)}\n`).join('')
  }
  return ''
}

const unaryTags = new Set(['link', 'meta', 'base'])

function incrementIndent(indent = '') {
  return `${indent}${indent[0] === '\t' ? '\t' : '  '}`
}

export function getAttrKey(attr: any): string {
  return attr.prefix === undefined ? attr.name : `${attr.prefix}:${attr.name}`
}

function serializeTag({ tag, attrs, children }: HtmlTagDescriptor, indent = ''): string {
  if (unaryTags.has(tag)) {
    return `<${tag}${serializeAttrs(attrs)}>`
  } else {
    return `<${tag}${serializeAttrs(attrs)}>${serializeTags(children, incrementIndent(indent))}</${tag}>`
  }
}

function prependInjectFallback(html: string, tags: HtmlTagDescriptor[]) {
  // prepend to the html tag, append after doctype, or the document start
  if (htmlPrependInjectRE.test(html)) {
    return html.replace(htmlPrependInjectRE, `$&\n${serializeTags(tags)}`)
  }
  if (doctypePrependInjectRE.test(html)) {
    return html.replace(doctypePrependInjectRE, `$&\n${serializeTags(tags)}`)
  }
  return serializeTags(tags) + html
}

function serializeAttrs(attrs: HtmlTagDescriptor['attrs']): string {
  let res = ''
  for (const key in attrs) {
    if (typeof attrs[key] === 'boolean') {
      res += attrs[key] ? ` ${key}` : ``
    } else {
      res += ` ${key}=${JSON.stringify(attrs[key])}`
    }
  }
  return res
}

function injectToBody(html: string, tags: HtmlTagDescriptor[], prepend = false) {
  if (tags.length === 0) return html

  if (prepend) {
    // inject after body open
    if (bodyPrependInjectRE.test(html)) {
      return html.replace(bodyPrependInjectRE, (match, p1) => `${match}\n${serializeTags(tags, incrementIndent(p1))}`)
    }
    // if no there is no body tag, inject after head or fallback to prepend in html
    if (headInjectRE.test(html)) {
      return html.replace(headInjectRE, (match, p1) => `${match}\n${serializeTags(tags, p1)}`)
    }
    return prependInjectFallback(html, tags)
  } else {
    // inject before body close
    if (bodyInjectRE.test(html)) {
      return html.replace(bodyInjectRE, (match, p1) => `${serializeTags(tags, incrementIndent(p1))}${match}`)
    }
    // if no body tag is present, append to the html tag, or at the end of the file
    if (htmlInjectRE.test(html)) {
      return html.replace(htmlInjectRE, `${serializeTags(tags)}\n$&`)
    }
    return `${html}\n${serializeTags(tags)}`
  }
}

function injectToHead(html: string, tags: HtmlTagDescriptor[], prepend = false) {
  if (tags.length === 0) return html

  if (prepend) {
    // inject as the first element of head
    if (headPrependInjectRE.test(html)) {
      return html.replace(headPrependInjectRE, (match, p1) => `${match}\n${serializeTags(tags, incrementIndent(p1))}`)
    }
  } else {
    // inject before head close
    if (headInjectRE.test(html)) {
      // respect indentation of head tag
      return html.replace(headInjectRE, (match, p1) => `${serializeTags(tags, incrementIndent(p1))}${match}`)
    }
    // try to inject before the body tag
    if (bodyPrependInjectRE.test(html)) {
      return html.replace(bodyPrependInjectRE, (match, p1) => `${serializeTags(tags, p1)}\n${match}`)
    }
  }
  // if no head tag is present, we prepend the tag for both prepend and append
  return prependInjectFallback(html, tags)
}
