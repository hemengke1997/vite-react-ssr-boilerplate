import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'
import { Link } from '@/components/Link'

export function Page() {
  const { t } = useTranslation()

  return (
    <>
      <div className={classnames('tw-italic', styles.pageA)}>
        <Link href='/'>to Index</Link>

        <p>this is page A</p>
        <div className={styles.c1}>
          c1
          <div className={styles.c2}>{t('key')}</div>
        </div>
      </div>
    </>
  )
}
