import type { AxiosRequestConfig, Canceler } from 'axios'
import axios from 'axios'
import { isFunction, omit } from 'lodash-es'

// 用于存储每个请求的标识
let pendingMap = new Map<string, Canceler>()

export const getPendingUrl = (config: AxiosRequestConfig) => {
  return [config.method, config.url, JSON.stringify(omit(config.params)), JSON.stringify(config.data)].join('&')
}

export class AxiosCanceler {
  /**
   * @description 添加请求
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          // 如果当前没有待处理的请求，则添加到缓存中
          pendingMap.set(url, cancel)
        }
      })
  }

  /**
   * @description 请求所有请求
   */
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  /**
   * @description 取消请求
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)

    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }

  /**
   * @description: 清空pendingMap缓存
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>()
  }
}
