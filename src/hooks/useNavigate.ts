import { useGlobalContext } from '@root/renderer/useGlobalContext'
import { getBase } from '@root/shared'
import normalizePath from 'normalize-path'
import { navigate as ssrNavigate } from 'vite-plugin-ssr/client/router'

function useNavigate() {
  const { locale } = useGlobalContext()
  const baseUrl = getBase()

  const navigate: typeof ssrNavigate = (url, ...args) => {
    return ssrNavigate(normalizePath(`${baseUrl}/${locale}/${url}`, true), ...args)
  }

  return navigate
}

export { useNavigate }
