const css = document.createElement('style')

css.appendChild(
  document.createTextNode(
    `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
  ),
)

let injected = false

function disableAnimation() {
  if (!injected) {
    document.head.appendChild(css)
    injected = true
  }

  return () => {
    ;(() => window.getComputedStyle(document.body))()

    if (injected) {
      setTimeout(() => {
        document.head.removeChild(css)
        injected = false
      }, 1)
    }
  }
}

window.disableAnimation = disableAnimation

export {}
