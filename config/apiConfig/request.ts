import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import qs from 'qs'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})
instance.interceptors.request.use(
  function (config: any) {
    console.log('请求被拦截')
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    config.headers.accept = 'application/json'
    return config
  },
  function (error: any) {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  function (res: any) {
    return res
  },
  function (error: any) {
    return Promise.reject(error)
  },
)
export const get = (url: string, params: any, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config,
    })
      .then((response: any) => {
        resolve(response)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

export const post = (url: string, data: any, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config,
    })
      .then((response: any) => {
        resolve(response)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}
export default instance
