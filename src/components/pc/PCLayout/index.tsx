import { usePageContext } from '@root/renderer/usePageContext'
import { ConfigProvider } from 'antd'
import { LoginModal } from '../LoginModal'
import '@/assets/style/pc/index.css'

function PCLayout({ children }: { children: React.ReactNode }) {
  const { token } = usePageContext()

  return (
    <ConfigProvider
      autoInsertSpaceInButton={false}
      theme={{
        token,
      }}
    >
      {children}
      <LoginModal />
    </ConfigProvider>
  )
}

export { PCLayout }
