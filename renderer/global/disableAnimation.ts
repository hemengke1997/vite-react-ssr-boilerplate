import { isBrowser } from '@root/shared'

let injected = false

let css: HTMLStyleElement

if (isBrowser()) {
  const css = document.createElement('style')

  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
    ),
  )
}

function disableAnimation() {
  try {
    if (!injected) {
      document.head.appendChild(css)
      injected = true
    }

    return () => {
      ;(() => window.getComputedStyle(document.body))()

      if (injected) {
        const timer = setTimeout(() => {
          document.head.removeChild(css)
          injected = false
          clearTimeout(timer)
        }, 1)
      }
    }
  } catch {}
}

export { disableAnimation }
