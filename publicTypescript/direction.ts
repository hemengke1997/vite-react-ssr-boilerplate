import { directionMap } from '@root/renderer/global/direction'
;(function () {
  try {
    const lang = document.documentElement.lang

    document.documentElement.setAttribute('dir', directionMap[lang] || 'ltr')
  } catch {}
})()

export {}
