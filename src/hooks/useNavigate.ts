import { useGlobalContext } from '@root/renderer/global/useGlobalContext'
import { getBase } from '@root/shared'
import normalizePath from 'normalize-path'
import { navigate as ssrNavigate } from 'vite-plugin-ssr/client/router'

type SSRNavigateParams = Parameters<typeof ssrNavigate>

function useNavigate() {
  const { locale } = useGlobalContext()
  const baseUrl = getBase()

  const navigate = (
    url: SSRNavigateParams[0],
    options?: Partial<{ locale: string }>,
    ssrOption?: SSRNavigateParams[1],
  ) => {
    const l = options?.locale || locale
    return ssrNavigate(normalizePath(`${baseUrl}/${l}/${url}`, true), ssrOption)
  }

  return [navigate] as const
}

export { useNavigate }
