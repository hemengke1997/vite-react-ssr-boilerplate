import type { LocaleMapType } from './locales'

// 由于 publicTypescript 中需要一个DirectionMap，所以需要单独维护
// TODO: 换个更好的方式，维护两个localeMap太麻烦了
export const localesDirectionMap: Record<string, Pick<LocaleMapType, 'locale' | 'direction'>> = {
  'zh': {
    locale: 'zh',
    direction: 'ltr',
  },
  'en': {
    locale: 'en',
    direction: 'ltr',
  },
  'zh-TW': {
    locale: 'zh-TW',
    direction: 'ltr',
  },
  'ar': {
    locale: 'ar',
    direction: 'rtl',
  },
}
