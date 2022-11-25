import classnames from 'classnames'
import styles from './index.module.css'
import { Link } from '@/components/Link'

export function Page() {
  return (
    <>
      <div className={classnames('tw-italic', styles.pageA)}>
        <Link href='/'>to Index</Link>

        <p>this is page A</p>
        <div className={styles.c1}>
          c1
          <div className={styles.c2}>c2</div>
        </div>
      </div>
    </>
  )
}
