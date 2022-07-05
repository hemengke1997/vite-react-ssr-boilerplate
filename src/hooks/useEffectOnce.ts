import type { EffectCallback } from 'react'
import { useEffect } from 'react'

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [])
}

export default useEffectOnce
