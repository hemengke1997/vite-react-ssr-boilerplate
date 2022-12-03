async function onBeforeRender(): PageType.onBeforeRender {
  return {
    pageContext: {
      pageProps: {
        title: 'pageA',
        description: '描述',
        keywords: '关键词',
        vconsole: false,
      },
    },
  }
}

export { onBeforeRender }
