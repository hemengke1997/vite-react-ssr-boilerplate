import type { DirectionType } from '@root/renderer/global/useGlobalContext'

export function setHtmlDirDirection(dir: DirectionType) {
  document.documentElement.setAttribute('dir', dir || 'ltr')
}

export const directionMap: Record<string, DirectionType> = {
  ar: 'rtl',
}
