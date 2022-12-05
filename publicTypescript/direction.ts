import * as lib from '@root/locales/localesDirectionMap'
;(async function () {
  try {
    const lang = document.documentElement.lang

    document.documentElement.setAttribute('dir', lib.localesDirectionMap[lang].direction || 'ltr')
  } catch {}
})()

export {}
