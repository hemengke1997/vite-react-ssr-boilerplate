import { get, post } from './request'

/**
 * 用户登录
 * @param {*} params
 * @returns
 */
export function loginStatus(params: any) {
  return post('api/front/login_status_check', params)
}
/**
 * 极验证
 * @param {*} params
 * @returns
 */
// export function loginStatus(params) {
//   return get('/api/front/get_captcha', params)
// }
