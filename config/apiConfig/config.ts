const devBaseURL = 'http://webtest.qiyou.cn'
const proBaseURL = 'https://www.qiyou.cn/'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000
