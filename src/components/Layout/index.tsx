import { useGlobalContext } from '@root/renderer/useGlobalContext'
import { ConfigProvider } from 'antd'
import { useEffect, useState } from 'react'
import { LoginModal } from '../LoginModal'

function Layout({ children }: { children: React.ReactNode }) {
  const { themeConfig } = useGlobalContext()

  const [mounted, setMountd] = useState(false)

  useEffect(() => {
    setMountd(true)

    const enable = window.disableAnimation()
    enable()

    return () => {
      window.disableAnimation()
      setMountd(false)
    }
  }, [])

  return (
    <div style={{ opacity: mounted ? 1 : 0 }} className='transition-opacity delay-100'>
      <ConfigProvider
        autoInsertSpaceInButton={false}
        theme={{
          algorithm: themeConfig?.algorithm,
          token: themeConfig?.token,
        }}
      >
        {children}
        <LoginModal />
      </ConfigProvider>
    </div>
  )
}

export { Layout }
