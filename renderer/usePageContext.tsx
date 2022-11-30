import { getI18next } from '@root/locales'
import { useAsyncEffect } from 'ahooks'
import React, { useContext, useState } from 'react'

export { PageContextProvider }
export { usePageContext }

type PageContextProviderType = PageType.PageContext & { token: Record<string, string> }

const Context = React.createContext<PageContextProviderType>(undefined as any)

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContextProviderType
  children: React.ReactNode
}) {
  const [locale, setLocale] = useState(pageContext.locale)

  useAsyncEffect(async () => {
    const i18next = await getI18next()
    i18next.on('languageChanged', (e) => {
      setLocale(e)
    })
  }, [])

  return <Context.Provider value={{ ...pageContext, locale }}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}
