async function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: '{{ title }}',
        description: '',
        keywords: '',
        isMobile: {{ isMobile }},
      },
    },
  }
}

export { onBeforeRender }
