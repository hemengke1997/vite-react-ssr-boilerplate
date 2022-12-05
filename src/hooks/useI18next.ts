import { localesMap, urlLocaleRegExp } from '@root/locales'
import { useGlobalContext } from '@root/renderer/global/useGlobalContext'
import { getBase } from '@root/shared'

export function useI18next() {
  const { setLocale } = useGlobalContext()

  function changeLocale(target: string) {
    setLocale(target)
    const base = getBase()
    const urlPath = window.location.pathname.replace(RegExp(`^${base}`), '')

    const maybeLang = urlPath.split('/')[0]

    if (Object.keys(localesMap).includes(maybeLang) && maybeLang !== target) {
      const url = window.location.href.replace(urlLocaleRegExp(maybeLang), target)
      history.replaceState(null, '', url)
    }
  }

  return { changeLocale }
}
