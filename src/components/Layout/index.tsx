import { disableAnimation } from '@root/renderer/global/disableAnimation'
import { useGlobalContext } from '@root/renderer/global/useGlobalContext'
import { ConfigProvider } from 'antd'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'

const AnimateRoute: FC<PropsWithChildren & { localeInited: boolean }> = ({ children, localeInited }) => {
  const { key } = useGlobalContext()

  // const init = key <= 0
  const init = !localeInited

  const controls = useAnimationControls()

  useEffect(() => {
    if (localeInited) {
      controls.start({ opacity: 1 })
    }
  }, [localeInited])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.15,
      }}
      animate={controls}
    >
      <motion.div
        // TODO: SEO?
        initial={{ opacity: 0, pointerEvents: 'none', x: init ? 0 : 8 }}
        animate={{ opacity: 1, pointerEvents: 'initial', x: 0 }}
        exit={{ opacity: 0, pointerEvents: 'none', x: init ? 0 : -8 }}
        transition={{
          duration: 0.15,
        }}
        style={{ opacity: init ? 0 : 1 }}
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
    </motion.div>
  )
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { themeConfig, direction, antdLocale } = useGlobalContext()

  const enable = useRef<() => void>()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    enable.current = disableAnimation()
    setMounted(true)

    return () => {
      enable.current?.()
    }
  }, [antdLocale])

  useEffect(() => {
    if (mounted) {
      enable.current?.()
    }
  }, [mounted])

  const [localeInited, setLocaleInited] = useState(false)
  const initLocaleRef = useRef(false)

  useEffect(() => {
    if (antdLocale && !initLocaleRef.current) {
      setLocaleInited(true)
    }
  }, [antdLocale])

  return (
    <AnimatePresence initial mode='wait'>
      <AnimateRoute localeInited={localeInited}>
        <ConfigProvider
          autoInsertSpaceInButton={false}
          direction={direction}
          theme={{
            algorithm: themeConfig?.algorithm,
            token: themeConfig?.token,
          }}
          locale={antdLocale}
        >
          {children}
        </ConfigProvider>
      </AnimateRoute>
    </AnimatePresence>
  )
}

export { Layout }
