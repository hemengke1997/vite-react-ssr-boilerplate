import { useGlobalContext } from '@root/renderer/useGlobalContext'
import { ConfigProvider } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'
import { useEffect } from 'react'

const AnimateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { key } = useGlobalContext()

  const init = key <= 0

  return (
    <motion.div
      initial={{ opacity: 0.01, pointerEvents: 'none', x: init ? 0 : 8 }}
      animate={{ opacity: 1, pointerEvents: 'initial', x: 0 }}
      exit={{ opacity: 0, pointerEvents: 'none', x: init ? 0 : -8 }}
      transition={{
        duration: 0.15,
        delay: init ? 0.1 : 0,
      }}
      key={key}
      onAnimationStart={() => {
        document.body.style.overflowX = 'hidden'
      }}
      onAnimationComplete={() => {
        document.body.style.overflowX = ''
      }}
    >
      {children}
    </motion.div>
  )
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { themeConfig } = useGlobalContext()

  useEffect(() => {
    const enable = window.disableAnimation()
    enable()

    return () => {
      window.disableAnimation()
    }
  }, [])

  return (
    <ConfigProvider
      autoInsertSpaceInButton={false}
      theme={{
        algorithm: themeConfig?.algorithm,
        token: themeConfig?.token,
      }}
    >
      <AnimatePresence initial mode='wait'>
        <AnimateRoute>{children}</AnimateRoute>
      </AnimatePresence>
    </ConfigProvider>
  )
}

export { Layout }
