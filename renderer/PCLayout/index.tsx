import styles from './index.module.less'
import Header from './Header'

function PCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.pcLayout}>
      <Header></Header>
      {children}
      <script type='text/javascript' src='./lib/flexible_pc.js'></script>
    </div>
  )
}

export default PCLayout
