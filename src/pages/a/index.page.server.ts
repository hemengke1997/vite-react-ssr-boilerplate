async function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: 'a',
        isMobile: false,
        layout: true
      },
    },
  }
}

export { onBeforeRender }
