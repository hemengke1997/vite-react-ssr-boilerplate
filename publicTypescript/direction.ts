import { localesDirectionMap } from '@root/locales/localesDirectionMap'
;(async function () {
  try {
    const lang = document.documentElement.lang

    document.documentElement.setAttribute('dir', localesDirectionMap[lang].direction || 'ltr')
  } catch {}
})()
