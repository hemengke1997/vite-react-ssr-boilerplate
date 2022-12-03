import { camelCase } from 'change-case'

export enum Theme {
  dark = 'dark',
  light = 'light',
}

const localStorageThemeKey = 'theme'

export function isDark() {
  return (
    localStorage[localStorageThemeKey] === Theme.dark ||
    (!(localStorageThemeKey in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}

export function setHtmlAndLocalStorageTheme(t: Theme) {
  try {
    let removeClass: Theme = Theme.light
    if (t === Theme.dark) {
      removeClass = Theme.light
    } else {
      removeClass = Theme.dark
    }
    document.documentElement.classList.remove(removeClass)
    document.documentElement.classList.add(t)
    localStorage.setItem(localStorageThemeKey, t)
  } catch {}
}

export function getVarsToken(cssVars: string) {
  const token: Record<string, string> = {}
  const varsList = cssVars?.match(/--[\w|-]+:[^;]+/g) || []

  varsList.forEach((item) => {
    const k = camelCase(item.split(':')[0]?.trim())

    const v = item.split(':')[1]?.trim()
    token[k] = v
  })

  return token
}

export function getTheme() {
  return isDark() ? Theme.dark : Theme.light
}

export function initTheme() {
  if (isDark()) {
    setHtmlAndLocalStorageTheme(Theme.dark)
  } else {
    setHtmlAndLocalStorageTheme(Theme.light)
  }
}
