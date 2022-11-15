async function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {
        title: "\u6807\u9898",
        description: "\u63CF\u8FF0",
        keywords: "\u5173\u952E\u8BCD",
        isMobile: false,
        checkPlatform: true
      }
    }
  };
}
export {
  onBeforeRender
};
