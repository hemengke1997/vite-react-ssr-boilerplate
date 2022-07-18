/**
 * 数据处理类，根据项目配置
 */

import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { OriginResult, RejectType, RequestOptions, Result } from './axios.d'

export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}

export type ResultType<T = any> = Result<T> | OriginResult | AxiosResponse<Result<T>>

export interface ResponseErrorType extends AxiosError<RejectType> {
  config: CreateAxiosOptions
}

export abstract class AxiosTransform {
  /**
   * @description 请求之前的处理
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig

  /**
   * @description 请求成功后的处理
   */
  transformRequestHook?: (res: AxiosResponse<OriginResult>, options: RequestOptions) => ResultType | undefined

  /**
   * @description 请求失败的处理
   */
  requestCatchHook?: (e: ResponseErrorType, options: RequestOptions) => ResultType | undefined

  /**
   * @description 请求之前的拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig, options: CreateAxiosOptions) => AxiosRequestConfig

  /**
   * @description 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>

  /**
   * @description 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void

  /**
   * @description 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: ResponseErrorType) => void
}
