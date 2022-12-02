import { useGlobalContext } from '@root/renderer/useGlobalContext'
import { ConfigProvider } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'

const AnimateRoute: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.01, pointerEvents: 'none' }}
      animate={{ opacity: 1, pointerEvents: 'initial' }}
      exit={{ opacity: 0, pointerEvents: 'none' }}
      transition={{
        duration: 0.15,
        delay: 0.1,
      }}
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

  const [_mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const enable = window.disableAnimation()
    enable()

    return () => {
      setMounted(false)
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
