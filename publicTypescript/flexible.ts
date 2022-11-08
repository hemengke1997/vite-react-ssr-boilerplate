;(function () {
  if (typeof window === 'undefined') return
  const type = document.documentElement.getAttribute('is-mobile') === 'true' ? 'mobile' : 'pc'

  const widthObj = {
    pc: {
      maxWidth: 1920,
      minWidth: 1300,
      UIWidth: 1920,
    },
    mobile: {
      maxWidth: 750,
      minWidth: 0,
      UIWidth: 750,
    },
  }

  function resize() {
    let width = window.innerWidth

    if (width > window.screen.width) {
    } else {
      if (width >= widthObj[type].maxWidth) {
        width = widthObj[type].maxWidth
      } else if (width <= widthObj[type].minWidth) {
        width = widthObj[type].minWidth
      }
      document.documentElement.style.fontSize = `${(width * 16) / widthObj[type].UIWidth}px`
    }
  }

  resize()

  let timer: NodeJS.Timer
  const interval = 60

  window.addEventListener('resize', () => {
    clearTimeout(timer)
    timer = setTimeout(resize, interval)
  })
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      clearTimeout(timer)
      timer = setTimeout(resize, interval)
      resize()
    }
  })
})()

export {}
