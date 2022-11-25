import type { AxiosResponse } from 'axios'
import { isString } from 'lodash-es'
import querystring from 'query-string'
import { isBrowser } from '@root/shared'
import normalizeUrl from 'normalize-url'
import { AxiosPro, ContentTypeEnum, RequestEnum } from './AxiosPro'
import type { AxiosTransform, CreateAxiosOptions, OriginResult, RequestOptions } from './axiosType.d'
import { deepMerge, joinTimestamp } from './utils'

export * from './axiosType.d'
export { ContentTypeEnum, RequestEnum }

const transform: AxiosTransform = {
  transformRequestHook: (res: AxiosResponse<OriginResult>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse } = options
    if (isReturnNativeResponse) {
      return res
    }

    if (!isTransformResponse) {
      return res.data
    }

    const { data } = res

    if (!data) {
      return {
        success: false,
        result: null,
      }
    }

    const isSuccess = res.status === 200

    if (isSuccess) {
      return {
        success: true,
        result: data,
      }
    }

    return {
      success: false,
      result: data,
    }
  },

  beforeRequestHook: (config, options) => {
    const { apiUrl, joinUrlPrefix, joinTime = '', urlPrefix } = options

    if (joinUrlPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }

    config.url = normalizeUrl(config.url ?? '', { stripWWW: false })

    const params = config.params || {}

    const data = config.data || false
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false))
      } else {
        config.url = `${config.url + params}${joinTimestamp(joinTime, true)}`
        config.params = undefined
      }
    } else {
      if (
        config.method?.toUpperCase() === RequestEnum.POST &&
        !config.headers?.['Content-Type'] &&
        !config.headers?.['content-type']
      ) {
        config.headers = {
          ...config.headers,
          'Content-Type': ContentTypeEnum.FORM_URLENCODED,
        }
      }
      if (!isString(params)) {
        if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
          config.data = data
          config.params = params
        } else {
          config.data = params
          config.params = undefined
        }
      } else {
        config.url = config.url + params
        config.params = undefined
      }
    }
    return config
  },

  requestInterceptors: (config) => {
    return config
  },

  responseInterceptors: (res: AxiosResponse<any>) => {
    return res
  },

  responseInterceptorsCatch: (error) => {
    return Promise.reject(error)
  },

  requestCatchHook: (error) => {
    const { response } = error || {}
    return {
      success: false,
      result: response?.data || null,
    }
  },
}

const defaultOptions: CreateAxiosOptions = {
  timeout: 30 * 1000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  transform,
  requestOptions: {
    joinUrlPrefix: true,
    isReturnNativeResponse: false,
    isTransformResponse: true,
    apiUrl: '',
    urlPrefix: '',
    joinTime: '',
  },
  paramsSerializer: {
    serialize: (params) => querystring.stringify(params, { arrayFormat: 'bracket' }),
  },
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new AxiosPro(deepMerge(defaultOptions, opt || {}))
}

const prefix = import.meta.env.VITE_APIPREFIX
const apiUrl = import.meta.env.VITE_APIURL

export const axiosRequest = createAxios({
  requestOptions: {
    urlPrefix: isBrowser() ? prefix ?? '' : '',
    apiUrl: isBrowser() ? window.location.origin : apiUrl,
    joinTime: 'ts',
  },
})
