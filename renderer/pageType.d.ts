declare namespace PageType {
  type PageProps = Partial<{
    title: string
    description: string
    keywords: string
    /**
     * 强制开启或关闭 vconsole
     */
    vconsole?: boolean
    /**
     * data from backend
     */
    data?: Record<string, any>
  }>

  interface PageContext {
    Page: React.FC<PageProps>
    pageProps: PageProps
    locale: string
    redirectTo?: string
  }

  type onBeforeRender = Promise<{
    pageContext: {
      pageProps: PageProps
    }
  }>

  type onBeforeRoute = {
    pageContext: {
      urlOriginal: string
      locale: string
      redirectTo?: string
    }
  }
}
