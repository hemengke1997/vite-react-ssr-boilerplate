'use strict'
;(() => {
  var t = 'theme'
  function n() {
    return (
      localStorage[t] === 'dark' || (!(t in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }
  function r() {
    n() ? e('dark') : e('light')
    function e(o) {
      try {
        document.documentElement.classList.add(o), localStorage.setItem(t, o)
      } catch (i) {}
    }
  }
  ;(function () {
    r()
  })()
})()
