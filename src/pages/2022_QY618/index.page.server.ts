async function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: '2022_QY618',
        isMobile: false,
        layout: false,
      },
    },
  }
}

export { onBeforeRender }
