async function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: '{{ title }}',
        isMobile: {{ isMobile }},
      },
    },
  }
}

export { onBeforeRender }

