declare namespace PageType {
  type PageProps = Partial<{
    title: string
    description: string
    keywords: string
    isMobile: boolean
    /**
     * @description 是否检查平台（移动端/pc）
     */
    checkPlatform: boolean
    /**
     * 是否强制开启 vconsole
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
    locale: {
      /**
       * eg. en
       */
      key: string
      /**
       * eg. en-US
       */
      value: string
    }
  }

  type onBeforeRender = Promise<{
    pageContext: {
      pageProps: PageProps
    }
  }>
}
