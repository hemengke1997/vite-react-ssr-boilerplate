import type { ThemeConfig } from 'antd/es/config-provider/context'
import type { i18n } from 'i18next'
import React, { useContext, useEffect, useState } from 'react'
import { theme as antdTheme } from 'antd'
import { Theme, getTheme, getVarsToken, setHtmlAndLocalStorageTheme } from './theme'
import { useControlledState } from '@/hooks/useControlledState'

type GlobalContextProps = PageType.PageContext & { i18n: i18n }

type GlobalContextProviderType = GlobalContextProps & {
  setLocale: (value: string) => void
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

export function GlobalContextProvider({ props, children }: { props: GlobalContextProps; children: React.ReactNode }) {
  const { locale: localeProp, i18n } = props

  const [locale, setLocale] = useControlledState({
    defaultValue: localeProp,
  })

  useEffect(() => {
    i18n.changeLanguage(locale)
    document.documentElement.lang = locale
  }, [locale])

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
    <Context.Provider value={{ ...props, locale, setLocale, theme, setTheme, themeConfig }}>
      {children}
    </Context.Provider>
  )
}

export function useGlobalContext() {
  const globalContext = useContext(Context)
  return globalContext
}
