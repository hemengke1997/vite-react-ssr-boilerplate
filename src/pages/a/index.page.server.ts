async function onBeforeRender(): PageType.onBeforeRender {
  return {
    pageContext: {
      pageProps: {
        title: '标题',
        description: '描述',
        keywords: '关键词',
        isMobile: false,
        checkPlatform: true,
      },
    },
  }
}

export { onBeforeRender }
