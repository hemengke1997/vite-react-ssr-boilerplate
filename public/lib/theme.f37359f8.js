'use strict'
;(() => {
  var o = 'theme'
  function n() {
    return (
      localStorage[o] === 'dark' || (!(o in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }
  function m() {
    n() ? r('dark') : r('light')
  }
  function r(t) {
    try {
      let e = 'light'
      t === 'dark' ? (e = 'light') : (e = 'dark'),
        document.documentElement.classList.remove(e),
        document.documentElement.classList.add(t),
        localStorage.setItem(o, t)
    } catch (e) {}
  }
  ;(function () {
    m()
  })()
})()
