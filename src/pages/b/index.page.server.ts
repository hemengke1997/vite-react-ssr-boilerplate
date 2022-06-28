async function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: 'b',
        isMobile: false,
      },
    },
  }
}

export { onBeforeRender }
