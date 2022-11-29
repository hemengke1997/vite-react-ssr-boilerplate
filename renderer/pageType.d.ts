import { i18n } from 'i18next'

declare global {
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
}
