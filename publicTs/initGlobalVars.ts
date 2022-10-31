;(function () {
  function getDocAttribute(name: string) {
    return document.documentElement.getAttribute(name)
  }
  const isTrue = 'true'
  window.isMobile = getDocAttribute('is-mobile') === isTrue
  window.checkPlatform = getDocAttribute('check-platform') === isTrue
})()

export {}
