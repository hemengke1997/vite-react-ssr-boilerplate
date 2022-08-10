import { BASE } from './constant'
import normalize from 'normalize-path'

export function getLibAssets(url: string) {
  return normalize(`${BASE}${url}`)
}
