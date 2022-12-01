'use strict'
;(() => {
  var n = document.createElement('style')
  n.appendChild(
    document.createTextNode(
      '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
    ),
  )
  var t = !1
  function e() {
    return (
      t || (document.head.appendChild(n), (t = !0)),
      () => {
        window.getComputedStyle(document.body),
          t &&
            setTimeout(() => {
              document.head.removeChild(n), (t = !1)
            }, 1)
      }
    )
  }
  window.disableAnimation = e
})()
