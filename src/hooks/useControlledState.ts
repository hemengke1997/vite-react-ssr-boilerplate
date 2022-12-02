import { useMemoizedFn, useUpdate } from 'ahooks'
import { isFunction } from 'lodash-es'
import { useMemo, useRef } from 'react'

function useControlledState<T, R = T>(option: {
  defaultValue?: T | (() => T)
  value?: T
  onChange?: (value: T, prevValue: T) => void
  postValue?: (value: T) => T
}): [R, (value: T | ((prevState: T) => T)) => void] {
  const { defaultValue, value, onChange, postValue } = option

  const isControlled = Object.prototype.hasOwnProperty.call(option, 'value') && typeof value !== 'undefined'

  const initialValue = useMemo(() => {
    if (isControlled) {
      return value
    }
    if (defaultValue !== undefined) {
      return isFunction(defaultValue) ? (defaultValue as Function)() : defaultValue
    }
  }, [])

  const stateRef = useRef(initialValue)

  if (isControlled) {
    stateRef.current = value
  }

  if (postValue) {
    stateRef.current = postValue(stateRef.current)
  }

  const update = useUpdate()

  function triggerChange(newValue: T | ((prevState: T) => T)) {
    const r = isFunction(newValue) ? newValue(stateRef.current) : newValue
    if (!isControlled) {
      stateRef.current = r

      update()
    }

    if (stateRef.current !== r && onChange) {
      onChange(r, stateRef.current)
    }
  }

  return [stateRef.current, useMemoizedFn(triggerChange)]
}

export { useControlledState }
