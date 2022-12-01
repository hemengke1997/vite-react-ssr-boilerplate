import { getTheme } from '@root/renderer/theme'
import { usePageContext } from '@root/renderer/usePageContext'
// import { isBrowser } from '@root/shared'
import { useMount } from 'ahooks'
import { ConfigProvider, theme } from 'antd'
import { useState } from 'react'
import { LoginModal } from '../LoginModal'

function Layout({ children }: { children: React.ReactNode }) {
  const { cssVarsMap } = usePageContext()

  const [token, setToken] = useState<Record<string, string>>()

  const [_mounted, setMounted] = useState(false)
  useMount(() => {
    setMounted(true)
    setToken(cssVarsMap?.[getTheme()])
  })

  // if (!mounted) return null

  return (
    <ConfigProvider
      autoInsertSpaceInButton={false}
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          ...token,
        },
      }}
    >
      {children}
      <LoginModal />
    </ConfigProvider>
  )
}

export { Layout }
