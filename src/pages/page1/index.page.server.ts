async function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: 'title',
        isMobile: true,
      },
    },
  }
}

export { onBeforeRender }
