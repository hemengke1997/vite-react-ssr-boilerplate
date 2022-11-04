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
     * data from backend
     */
    data?: Record<string, any>
  }>

  interface PageContext {
    Page: React.FC<PageProps>
    pageProps: PageProps
  }

  type onBeforeRender = Promise<{
    pageContext: {
      pageProps: PageProps
    }
  }>
}
