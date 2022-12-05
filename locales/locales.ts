import type { DirectionType } from '@root/renderer/global/useGlobalContext'
import type { Locale } from 'antd/es/locale-provider'
import { localesDirectionMap } from './localesDirectionMap'

export interface LocaleMapType {
  locale: string
  /**
   * @see https://ant.design/docs/react/i18n-cn
   */
  antd: () => Promise<{
    default: Locale
  }>
  /**
   * @see https://github.com/iamkun/dayjs/tree/dev/src/locale
   */
  dayjs: () => Promise<{
    default: any
  }>
  /**
   * @see https://ant.design/components/config-provider#components-config-provider-demo-direction
   * @see https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support
   */
  direction: DirectionType
}

export const localesMap: Record<string, LocaleMapType> = {
  'zh': {
    dayjs: () => import('dayjs/locale/zh-cn'),
    antd: () => import('antd/locale/zh_CN'),
    ...localesDirectionMap.zh,
  },
  'en': {
    dayjs: () => import('dayjs/locale/en'),
    antd: () => import('antd/locale/en_US'),
    ...localesDirectionMap.en,
  },
  'zh-TW': {
    dayjs: () => import('dayjs/locale/zh-tw'),
    antd: () => import('antd/locale/zh_TW'),
    ...localesDirectionMap['zh-TW'],
  },
  'ar': {
    dayjs: () => import('dayjs/locale/ar'),
    antd: () => import('antd/locale/ar_EG'),
    ...localesDirectionMap.ar,
  },
}
