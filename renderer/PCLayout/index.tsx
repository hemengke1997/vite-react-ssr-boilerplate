import styles from './Header/less/index.module.less'
import { Header } from './Header/Header'
import 'antd/dist/antd.css';
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
