import type { AxiosResponse } from 'axios'
import { isString } from 'lodash-es'
import querystring from 'query-string'
import { isDevMode } from '@root/shared/env'
import { isBrowser } from '@root/shared'
import normalizeUrl from 'normalize-url'
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform'
import { ContentTypeEnum, RequestEnum, VAxios } from './Axios'
import type { OriginResult, RequestOptions } from './axiosType.d'
import { deepMerge, formatRequestDate, joinTimestamp, setObjToUrlParams } from './helper'

export * from './axiosType.d'

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
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true, urlPrefix } = options

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }

    config.url = normalizeUrl(config.url ?? '', { stripWWW: false })

    const params = config.params || {}

    const data = config.data || false
    formatDate && data && !isString(data) && formatRequestDate(data)
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
        formatDate && formatRequestDate(params)
        if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
          config.data = data
          config.params = params
        } else {
          config.data = params
          config.params = undefined
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(config.url as string, Object.assign({}, config.params, config.data))
        }
      } else {
        config.url = config.url + params
        config.params = undefined
      }
    }
    return config
  },

  requestInterceptors: (config, options) => {
    config.headers = Object.assign({}, config.headers)
    config.headers.Accept = config.headers.accept
    if (isDevMode()) {
      config.headers.UserAgent = 'terminal_type/system_type/system_version/channel/lagofast/1.0.0/terminal_code/lang'
    }
    delete config.headers.accept

    if (config.method?.toLocaleLowerCase() === 'get') {
    }

    if (config.method?.toLocaleLowerCase() === 'post') {
      const contentType = options.headers?.['Content-Type'] || options.headers?.['content-type']

      if (contentType === ContentTypeEnum.JSON) {
      } else if (contentType === ContentTypeEnum.FORM_URLENCODED) {
      }
    }

    return config
  },

  responseInterceptors: (res: AxiosResponse<any>) => {
    return res
  },

  responseInterceptorsCatch: (error) => {
    const { response, code, message } = error || {}
    const _msg = response?.data?.error_msg
    const err = error?.toString?.() ?? ''

    try {
      if (code === 'ECONNABORTED' && message.includes('timeout')) {
      }
      if (err?.includes('Network Error')) {
      }

      if (_msg) {
        return Promise.reject(_msg)
      }
    } catch (e) {
      throw new Error(e as unknown as string)
    }

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

const OPTION = {
  authenticationScheme: '',
  timeout: 30 * 1000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },

  transform,
  requestOptions: {
    joinPrefix: true,
    isReturnNativeResponse: false,
    isTransformResponse: true,
    joinParamsToUrl: false,
    formatDate: true,
    apiUrl: '',
    urlPrefix: '',
    joinTime: false,
    ignoreRepeatToken: true,
    withToken: true,
  },
  paramsSerializer: (params) => querystring.stringify(params),
} as CreateAxiosOptions

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(deepMerge(OPTION, opt || {}))
}

const prefix = import.meta.env.VITE_APIPREFIX
const apiUrl = import.meta.env.VITE_APIURL

export const axiosRequest = createAxios({
  requestOptions: {
    joinTime: true,
    urlPrefix: isBrowser() ? prefix ?? '' : '',
    apiUrl: isBrowser() ? window.location.origin : apiUrl,
  },
})
