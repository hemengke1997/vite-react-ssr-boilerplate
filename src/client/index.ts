// environment: broswer

// insert 百度统计
export function insert_hm() {
  const hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?2306e386141b6bd7acdeef46503ec82d'
  const s = document.getElementsByTagName('script')[0]
  s.parentNode?.insertBefore(hm, s)
}
