import styles from './index.module.less'
import { Header } from './Header'

function PCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.pcLayout}>
      <Header></Header>
      {children}
    </div>
  )
}

// eslint-disable-next-line no-restricted-syntax
export default PCLayout
