import { useEffect, useState } from 'react'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/locale/zh_CN'
import { LoginModal } from '../LoginModal'
import '@/assets/style/pc/index.css'
import cssVars from '@/assets/style/vars.css'

function PCLayout({ children }: { children: React.ReactNode }) {
  const [_vars, setVars] = useState<Record<string, string>>()
  useEffect(() => {
    const firstBrackets = cssVars.indexOf('{')
    const lastBrackets = cssVars.indexOf('}')

    const varsList = cssVars
      .slice(firstBrackets + 1, lastBrackets)
      .replaceAll('\n', '')
      .replaceAll('\r', '')
      .split(';')

    const x = {}
    varsList.forEach((item) => {
      const k = item.split(':')[0]?.trim()
      let v = item.split(':')[1]?.trim()

      if (k && v) {
        if (v.startsWith('var')) {
          v = getComputedStyle(document.documentElement).getPropertyValue(k).trim()
        }
        x[k] = v
      }
    })
    setVars(x)
  }, [])

  return (
    <ConfigProvider
      locale={zh_CN}
      autoInsertSpaceInButton={false}
      theme={{
        token: {
          colorPrimary: '#00aeec',
        },
      }}
    >
      {children}
      <LoginModal />
    </ConfigProvider>
  )
}

export { PCLayout }
