import type { ThemeConfig, DirectionType as antdDirectionType } from 'antd/es/config-provider/context'
import type { i18n } from 'i18next'
import React, { useContext, useEffect, useState } from 'react'
import { theme as antdTheme } from 'antd'
import dayjs from 'dayjs'
import { useIsomorphicLayoutEffect, useSetState } from 'ahooks'
import type { Locale } from 'antd/es/locale-provider'
import { localesMap } from '@root/locales'
import type { SetState } from 'ahooks/lib/useSetState'
import { Theme, getTheme, getVarsToken, setHtmlAndLocalStorageTheme } from './theme'
import { setHtmlDirDirection } from './direction'
import { useControlledState } from '@/hooks/useControlledState'

type GlobalContextProps = PageType.PageContext & { i18n: i18n; key: number }

type GlobalContextProviderType = GlobalContextProps & {
  setLocale: (value: string) => void
  theme: Theme | undefined
  setTheme: (value: Theme) => void
  themeConfig: {
    token: ThemeConfig['token']
    algorithm: ThemeConfig['algorithm']
  }
  setThemeConfig: SetState<GlobalContextProviderType['themeConfig']>
  direction: DirectionType
  setDirection: (value: DirectionType) => void
  antdLocale: Locale | undefined
}

/* --------------- get css begin -------------- */

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
/* ---------------- get css end --------------- */

/* -------------- direction begin ------------- */
export type DirectionType = antdDirectionType
/* --------------- direction end -------------- */

export function GlobalContextProvider({ props, children }: { props: GlobalContextProps; children: React.ReactNode }) {
  /* --------------- locale begin --------------- */
  const { locale: localeProp, i18n } = props

  const [antdLocale, setAntdLocale] = useState<Locale>()

  useEffect(() => {
    setLocale(localeProp)
  }, [localeProp])

  const [locale, setLocale] = useControlledState({
    defaultValue: localeProp,
  })

  const setLocaleAllAtOnce = async (l: string) => {
    document.documentElement.lang = l

    const antdLocale = (await localesMap[l].antd()).default
    const dayjsLocale = (await localesMap[l]?.dayjs()).default

    setAntdLocale(antdLocale)

    dayjs.locale(dayjsLocale)
  }

  useEffect(() => {
    if (i18n) {
      i18n.on('languageChanged', async (lang) => {
        setLocale(lang)
        setLocaleAllAtOnce(lang)
      })
    }
  }, [i18n])

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])
  /* ---------------- locale end ---------------- */

  /* ---------------- theme begin --------------- */
  const [theme, setTheme] = useState<Theme>()

  useIsomorphicLayoutEffect(() => {
    setTheme(getTheme())
  }, [])

  const [themeConfig, setThemeConfig] = useSetState<GlobalContextProviderType['themeConfig']>({
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

  /* ----------------- theme end ---------------- */

  /* -------------- direction begin ------------- */
  const [direction, _setDirection] = useState<DirectionType>(localesMap[localeProp]?.direction)

  const setDirection = (dir: DirectionType) => {
    setHtmlDirDirection(dir)
    _setDirection(dir)
  }
  /* --------------- direction end -------------- */

  return (
    <Context.Provider
      value={{
        ...props,
        locale,
        setLocale,
        theme,
        setTheme,
        themeConfig,
        setThemeConfig,
        direction,
        setDirection,
        antdLocale,
      }}
    >
      {children}
    </Context.Provider>
  )
}

const Context = React.createContext<GlobalContextProviderType>(undefined as any)

export function useGlobalContext() {
  const globalContext = useContext(Context)
  return globalContext
}
