import { disableAnimation } from '@root/renderer/global/disableAnimation'
;(function () {
  const enable = disableAnimation()

  window.addEventListener('load', () => {
    enable?.()
  })
})()
