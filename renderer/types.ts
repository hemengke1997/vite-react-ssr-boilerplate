export interface PageProps {}

export interface PageContext {
  Page: any
  pageProps?: PageProps
  documentProps?: {
    title?: string
    description?: string
    keywords?: string
    isMobile?: boolean
    layout?: boolean
  }
}
