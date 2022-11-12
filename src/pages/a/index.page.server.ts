async function onBeforeRender(): PageType.onBeforeRender {
  function lazy() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1)
      }, 2000)
    })
  }

  const res = await lazy()

  return {
    pageContext: {
      pageProps: {
        title: '标题',
        description: '描述',
        keywords: '关键词',
        isMobile: false,
        checkPlatform: true,
        data: { x: res },
      },
    },
  }
}

export { onBeforeRender }
