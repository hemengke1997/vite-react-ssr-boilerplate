import { getI18next, localesMap } from '@root/locales'
import { getBase } from '@root/shared'
import { useAsyncEffect } from 'ahooks'
import type { i18n } from 'i18next'
import { useState } from 'react'

export function useI18next() {
  const [i18next, setI18next] = useState<i18n>()

  useAsyncEffect(async () => {
    setI18next(await getI18next())
  }, [])

  function changeLang(target: string) {
    i18next?.changeLanguage(target)
    const base = getBase()
    const urlPath = window.location.pathname.replace(RegExp(`^${base}`), '')

    const maybeLang = urlPath.split('/')[0]

    if (Object.keys(localesMap).includes(maybeLang) && maybeLang !== target) {
      const url = window.location.href.replace(RegExp(`(?<=/)${maybeLang}(?=[/|\s])`), target)
      history.pushState(null, '', url)
    }
  }

  return [i18next, changeLang] as const
}
