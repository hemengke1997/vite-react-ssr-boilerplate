import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'
import { Link } from '@/components/Link'
import { useNavigate } from '@/hooks/useNavigate'

export function Page() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <div className={classnames('tw-italic', styles.pageA)}>
        <Link href='/'>to Index</Link>

        <p>this is page A</p>
        <div className={styles.c1}>
          c1
          <div
            className={styles.c2}
            onClick={() => {
              navigate('/')
            }}
          >
            {t('home.hello')}
          </div>
        </div>
      </div>
    </>
  )
}
