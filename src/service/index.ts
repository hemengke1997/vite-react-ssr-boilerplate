// axios配置
import type { AxiosResponse } from 'axios'
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform'
import { ContentTypeEnum, RequestEnum, VAxios } from './Axios'
import { joinTimestamp, formatRequestDate, setObjToUrlParams, deepMerge } from './helper'
import { isString } from 'lodash-es'
import { OriginResult, RequestOptions } from './axiosType.d'
import querystring from 'query-string'
import { isDevMode } from '@root/shared/env'

export * from './axiosType.d'

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestHook: (res: AxiosResponse<OriginResult>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse } = options
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data
    }

    // 错误的时候返回
    const { data } = res

    if (!data) {
      // return '[HTTP] Request has no return value';
      // checkStatus(null, t('sys.apiRequestFailed'), options.errorMessageMode);
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

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true, urlPrefix } = options

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }
    const params = config.params || {}

    const data = config.data || false
    formatDate && data && !isString(data) && formatRequestDate(data)
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false))
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`
        config.params = undefined
      }
    } else {
      // post 默认表单请求
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
          // 非GET请求如果没有提供data，则将params视为data
          config.data = params
          config.params = undefined
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(config.url as string, Object.assign({}, config.params, config.data))
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params
        config.params = undefined
      }
    }
    return config
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    // 请求之前处理config
    config.headers = Object.assign({}, config.headers)
    config.headers.Accept = config.headers.accept
    if (isDevMode()) {
      config.headers['UserAgent'] = 'terminal_type/system_type/system_version/channel/lagofast/1.0.0/terminal_code/lang'
    }
    delete config.headers.accept

    if (config.method?.toLocaleLowerCase() === 'get') {
      // TODO
    }

    if (config.method?.toLocaleLowerCase() === 'post') {
      const contentType = options.headers?.['Content-Type'] || options.headers?.['content-type']

      if (contentType === ContentTypeEnum.JSON) {
        // TODO
      } else if (contentType === ContentTypeEnum.FORM_URLENCODED) {
        // TODO
      }
    }

    return config
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res
  },

  /**
   * @description: 响应拦截器错误处理
   */
  responseInterceptorsCatch: (error) => {
    const { response, code, message } = error || {}
    const _msg = response?.data?.error_msg
    const err = error?.toString?.() ?? ''

    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
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

  /**
   * @description: 请求失败的处理
   */
  requestCatchHook: (error) => {
    const { response } = error || {}
    return {
      success: false,
      result: response?.data || null,
    }
  },
}

const OPTION = {
  // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
  // authentication schemes，e.g: Bearer
  // authenticationScheme: 'Bearer',
  authenticationScheme: '',
  timeout: 30 * 1000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  // 如果是form-data格式
  // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
  // 数据处理方式
  transform,
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: {
    // 默认将prefix 添加到url
    joinPrefix: true,
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    isReturnNativeResponse: false,
    // 需要对返回数据进行处理
    isTransformResponse: true,
    // post请求的时候添加参数到url
    joinParamsToUrl: false,
    // 格式化提交参数时间
    formatDate: true,
    // 接口地址
    apiUrl: '',
    // 接口拼接地址
    urlPrefix: '',
    //  是否加入时间戳
    joinTime: false,
    // 忽略重复请求
    ignoreRepeatToken: true,
    // 是否携带token
    withToken: true,
  },
  paramsSerializer: (params) => querystring.stringify(params),
} as CreateAxiosOptions

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(deepMerge(OPTION, opt || {}))
}

const prefix = process.env['API_PREFIX']

export const axiosRequest = createAxios({
  requestOptions: {
    joinTime: true,
    urlPrefix: prefix ?? '',
  },
})
