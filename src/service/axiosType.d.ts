export interface RequestOptions {
  // 是否拼接请求参数到url上
  joinParamsToUrl?: boolean
  // 是否格式化请求参数中的时间
  formatDate?: boolean
  // 是否处理响应格式
  isTransformResponse?: boolean
  // 是否需要拿到原生响应结果
  isReturnNativeResponse?: boolean
  // prefix是否加入url
  joinPrefix?: boolean
  // 接口地址，使用默认的apiUrl
  apiUrl?: string
  // 请求拼接路径
  urlPrefix?: string
  // 是否添加时间戳
  joinTime?: boolean
  // 是否忽略重复请求
  ignoreRepeatToken?: boolean
  // 是否在请求头中带上token
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

// multipart/form-data 上传文件
export interface UploadFileParams {
  // 附加参数
  data?: Record<string, any>
  // 文件参数接口字段名
  name?: string
  // file name
  file: File | Blob
  // file name
  filename?: string
  [key: string]: any
}
