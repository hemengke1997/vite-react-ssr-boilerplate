import { getI18next } from '@root/locales'
import type { ThemeConfig } from 'antd/es/config-provider/context'
import type { i18n } from 'i18next'
import React, { useContext, useEffect, useState } from 'react'
import { theme as antdTheme } from 'antd'
import { Theme, getTheme, getVarsToken, setHtmlAndLocalStorageTheme } from './theme'

type PageContext = PageType.PageContext

type GlobalContextProviderType = PageContext & {
  theme: Theme | undefined
  setTheme: (value: Theme) => void
  themeConfig:
    | {
        token: ThemeConfig['token']
        algorithm: ThemeConfig['algorithm']
      }
    | undefined
}

export const cssVarsMap: Record<Theme, ReturnType<typeof getVarsToken>> = { dark: {}, light: {} }
const vars = import.meta.glob('@/assets/style/vars/*.css', {
  as: 'raw',
  eager: true,
})

Object.keys(vars).forEach((css) => {
  const cssFileName = /(?<=\/)[^\/]*(?=\.css)/.exec(css)![0]
  const token = getVarsToken(vars[css])
  cssVarsMap[cssFileName] = token
})

const Context = React.createContext<GlobalContextProviderType>(undefined as any)

export function GlobalContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext
  children: React.ReactNode
}) {
  const [locale, setLocale] = useState(pageContext.locale)

  useEffect(() => {
    let i18next: i18n | undefined
    getI18next().then((res) => {
      i18next = res
      i18next.on('languageChanged', (l) => {
        setLocale(l)
        // html
        document.documentElement.lang = l
      })
    })
    return () => {
      i18next?.off('languageChanged')
    }
  }, [])

  const [theme, setTheme] = useState<Theme>()

  useEffect(() => {
    setTheme(getTheme())
  }, [])

  const [themeConfig, setThemeConfig] = useState<GlobalContextProviderType['themeConfig']>({
    algorithm: antdTheme.defaultAlgorithm,
    token: {},
  })

  useEffect(() => {
    if (theme) {
      setThemeConfig({
        token: cssVarsMap?.[theme],
        algorithm: theme === Theme.light ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm,
      })
      setHtmlAndLocalStorageTheme(theme)
    }
  }, [theme])

  return (
    <Context.Provider value={{ ...pageContext, locale, theme, setTheme, themeConfig }}>{children}</Context.Provider>
  )
}

export function useGlobalContext() {
  const globalContext = useContext(Context)
  return globalContext
}
