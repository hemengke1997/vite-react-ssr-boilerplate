import normalize from 'normalize-path'

export function getBase() {
  let p
  if (isVite()) {
    p = import.meta.env.VITE_BASEURL
  } else if (isNode()) {
    p = process.env.VITE_BASEURL
  }

  return normalize(`${p ?? '/'}`, false)
}

export function getLibAssets(url: string) {
  return normalize(`${getBase()}${url}`)
}

// Only use this method to judge if is browser env
export function isBrowser() {
  return typeof window !== 'undefined' && typeof window.scrollY === 'number'
}

// Only use this method to judge if is node env
export function isNode() {
  return typeof process !== 'undefined'
}

// Only use this method to judge if is vite env
export function isVite() {
  return !!import.meta.env
}
