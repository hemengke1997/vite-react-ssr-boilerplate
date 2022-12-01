import { camelCase } from 'lodash-es'

export enum Theme {
  dark = 'dark',
  light = 'light',
}

const localStorageThemeKey = 'theme'

export const getVarsToken = (cssVars: string) => {
  const token: Record<string, string> = {}
  const varsList = cssVars?.match(/--[\w|-]+:[^;]+/g) || []

  varsList.forEach((item) => {
    const k = camelCase(item.split(':')[0]?.trim())

    const v = item.split(':')[1]?.trim()
    token[k] = v
  })

  return token
}

export function isDark() {
  return (
    localStorage[localStorageThemeKey] === 'dark' ||
    (!(localStorageThemeKey in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}

export function setTheme() {
  if (isDark()) {
    setHtmlTheme('dark')
  } else {
    setHtmlTheme('light')
  }

  function setHtmlTheme(t: keyof typeof Theme) {
    try {
      document.documentElement.classList.add(t)
      localStorage.setItem(localStorageThemeKey, t)
    } catch {}
  }
}

export function getTheme() {
  return isDark() ? Theme.dark : Theme.light
}
