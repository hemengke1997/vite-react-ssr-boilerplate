/* --------------------------------- 百度统计相关 --------------------------------- */

export function trackEvent(name: string, type = 'click') {
  window._hmt?.push(['_trackEvent', name, type, '', ''])
}
