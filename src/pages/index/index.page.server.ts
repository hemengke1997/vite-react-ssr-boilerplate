async function onBeforeRender(): PageType.onBeforeRender {
  return {
    pageContext: {
      pageProps: {
        title: 'index',
        description: 'this is index',
        keywords: 'kw',
        vconsole: false,
      },
    },
  }
}

export { onBeforeRender }
