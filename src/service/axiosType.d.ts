export interface RequestOptions {
  joinParamsToUrl?: boolean
  formatDate?: boolean
  isTransformResponse?: boolean
  isReturnNativeResponse?: boolean
  joinPrefix?: boolean
  apiUrl?: string
  urlPrefix?: string
  joinTime?: boolean
  ignoreRepeatToken?: boolean
  withToken?: boolean
}

export type RejectType = Partial<{
  error_code: number
  error_msg: string
}>

export interface OriginResult {
  status?: number
  success?: boolean
  [key: string]: any
}

export interface Result<T extends any = any> {
  success: boolean
  result: T
}

export interface UploadFileParams {
  data?: Record<string, any>
  name?: string
  file: File | Blob
  filename?: string
  [key: string]: any
}
