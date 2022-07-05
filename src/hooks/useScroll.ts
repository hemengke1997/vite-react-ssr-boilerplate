import type { RefObject } from 'react'
import { useEffect } from 'react'

import { off, on } from '@/utils'

import useRafState from './useRafState'

export interface State {
  x: number
  y: number
}

const useScroll = (ref: RefObject<HTMLElement>): State => {
  const [state, setState] = useRafState<State>({
    x: 0,
    y: 0,
  })
  useEffect(() => {
    const handler = () => {
      console.log('ref.current', ref.current)
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop,
        })
      }
    }
    if (ref.current) {
      on(ref.current, 'scroll', handler, {
        capture: false,
        passive: true,
      })
    }
    return () => {
      if (ref.current) {
        off(ref.current, 'scroll', handler)
      }
    }
  }, [ref])
  return state
}
export default useScroll
