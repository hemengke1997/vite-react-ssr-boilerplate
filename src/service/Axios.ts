/*
 * axios module
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { cloneDeep, isFunction } from 'lodash-es'
import { RequestOptions, Result } from './axios.d'
import { AxiosCanceler } from './axiosCancel'
import { CreateAxiosOptions, ResponseErrorType } from './axiosTransform'
import querystring from 'query-string'

export * from './axiosTransform'

/**
 * @description: contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description: Request result set
 */
export enum ResultEnum {
  ERROR = 1,
  TIMEOUT = '401',
  TYPE = 'success',
}

export class VAxios {
  private axiosInstance: AxiosInstance
  readonly options: CreateAxiosOptions

  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)

    // 设置拦截器
    this.setupInterceptors()
  }

  /**
   * @description 创建axios实例
   */
  private createAxios(options: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(options)
  }

  /**
   * @description 获取transform
   */
  getTransform() {
    const { transform } = this.options
    return transform
  }

  /**
   * @description 获取axios实例
   */
  getAxiosInstance() {
    return this.axiosInstance
  }

  /**
   * @description 重新设置axios
   */
  reconfigAxios(options: CreateAxiosOptions) {
    if (!this.axiosInstance) return
    this.createAxios(options)
  }

  /**
   * @description 设置header
   */
  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }

  /**
   * @description 设置拦截器
   */
  private setupInterceptors() {
    const transform = this.getTransform()
    if (!transform) return

    const axiosCanceler = new AxiosCanceler()

    const { requestInterceptors, requestInterceptorsCatch, responseInterceptors, responseInterceptorsCatch } = transform

    // 设置请求拦截器
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      // 如果打开了取消重复请求，则禁止重复请求
      const {
        // @ts-ignore
        headers: { ignoreRepeatToken },
      } = config

      const ignoreRepeat =
        ignoreRepeatToken !== undefined ? ignoreRepeatToken : this.options.requestOptions?.ignoreRepeatToken

      ignoreRepeat && axiosCanceler.addPending(config)
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options)
      }
      return config
    }, undefined)

    // 设置请求拦截器错误捕获
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)

    // 响应拦截器处理
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removePending(res.config)
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res)
      }
      return res
    }, undefined)

    // 响应拦截器错误捕获
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch)
  }

  /**
   * @description 文件上传
   */
  uploadFile<T = Result>(config: AxiosRequestConfig) {
    const formData = new window.FormData()

    if (config.data) {
      Object.keys(config.data).forEach((key) => {
        const value = config.data![key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }

        formData.append(key, config.data![key])
      })
    }

    config.data = formData

    return this.request<T>({
      ...config,
      method: 'POST',
      withCredentials: false,
      headers: {
        // 'Content-type': ContentTypeEnum.FORM_DATA,
        // @ts-ignore
        ignoreRepeatToken: true,
      },
    })
  }

  // 支持 form-data
  supportFormData(config: AxiosRequestConfig) {
    const headers = config.headers || this.options.headers
    const contentType = headers?.['Content-Type'] || headers?.['content-type']

    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      return config
    }

    return {
      ...config,
      data: querystring.stringify(config.data, { arrayFormat: 'bracket' }),
    }
  }

  get<T = Result>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options)
  }

  post<T = Result>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options)
  }

  put<T = Result>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'PUT' }, options)
  }

  delete<T = Result>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'DELETE' }, options)
  }

  request<T = Result>(config: AxiosRequestConfig, options?: RequestOptions) {
    let conf: CreateAxiosOptions = cloneDeep(config)
    const transform = this.getTransform()

    const { requestOptions } = this.options

    const opt: RequestOptions = Object.assign({}, requestOptions, options)

    const { beforeRequestHook, requestCatchHook, transformRequestHook } = transform || {}
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt)
    }

    conf.requestOptions = opt

    conf = this.supportFormData(conf)

    return new Promise<T>((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt) as unknown as T
              resolve(ret)
            } catch (err) {
              reject(err || new Error('request error!'))
            }
            return
          }
          resolve(res as unknown as Promise<T>)
        })
        .catch((e: ResponseErrorType) => {
          if (axios.isCancel(e)) {
            console.log('Request canceled', e.message)
            return
          }

          if (requestCatchHook && isFunction(requestCatchHook)) {
            resolve(requestCatchHook(e, opt) as unknown as Promise<T>)
            return
          }
          if (axios.isAxiosError(e)) {
            // 重写axios错误
          }
          reject(e)
        })
    })
  }
}
