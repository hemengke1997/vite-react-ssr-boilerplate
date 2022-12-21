import type { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosResponse } from 'axios'

export interface RequestOptions {
  isTransformResponse?: boolean
  isReturnNativeResponse?: boolean
  joinUrlPrefix?: boolean
  apiUrl?: string
  urlPrefix?: string
  joinTime?: string
  ignoreRepeatRequest?: boolean
}

export interface OriginResult {
  status?: number
  success?: boolean
  [key: string]: any
}

export interface StandardResult<T extends any = any> {
  success: boolean
  result: T
}

export type ResultType<T extends any = any> = OriginResult | AxiosResponse<OriginResult, T> | StandardResult<T>

export interface UploadFileParams {
  data?: Record<string, any>
  name?: string
  file: File | Blob
  filename?: string
  [key: string]: any
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}

export interface ResponseErrorType extends AxiosError {
  config: CreateAxiosOptions
}

export abstract class AxiosTransform<T extends any = any> {
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig

  transformResponseHook?: (res: AxiosResponse<OriginResult>, options: RequestOptions) => ResultType<T>

  requestCatchHook?: (e: ResponseErrorType, options: RequestOptions) => ResultType<T>

  requestInterceptors?: (config: AxiosRequestConfig, options: CreateAxiosOptions) => AxiosRequestConfig

  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>

  requestInterceptorsCatch?: (error: Error) => void

  responseInterceptorsCatch?: (error: ResponseErrorType) => void
}
