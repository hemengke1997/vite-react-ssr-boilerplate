async function onBeforeRender(): PageType.onBeforeRender {
  return {
    pageContext: {
      pageProps: {
        title: 'index',
        description: 'this is index',
        keywords: 'kw',
      },
    },
  }
}

export { onBeforeRender }
