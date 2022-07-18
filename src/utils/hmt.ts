/* --------------------------------- 百度统计相关 --------------------------------- */

export function trackEvent(name: string, type: string = 'click') {
  window._hmt?.push(['_trackEvent', name, type, '', ''])
}
