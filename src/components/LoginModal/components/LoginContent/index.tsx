import type { FC } from 'react'
import styles from './index.module.css'

const prefix = 'login'

const LoginContent: FC = () => {
  return (
    <div className={styles[prefix]}>
      <div className={styles[`${prefix}-title`]}>登录</div>
      <div className={styles[`${prefix}-content`]}>content</div>
    </div>
  )
}

export { LoginContent }
