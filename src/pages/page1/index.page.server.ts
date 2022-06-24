async function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: 'xxxxx',
        isMobile: true,
      },
    },
  }
}

export { onBeforeRender }

