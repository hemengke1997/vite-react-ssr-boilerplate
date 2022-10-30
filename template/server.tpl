async function onBeforeRender(): PageType.onBeforeRender {
  return {
    pageContext: {
      documentProps: {
        title: '{{ title }}',
        description: '',
        keywords: '',
        isMobile: {{ isMobile }},
        checkPlatform: true,
      },
    },
  }
}

export { onBeforeRender }
