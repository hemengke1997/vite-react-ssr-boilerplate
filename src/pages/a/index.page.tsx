import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import styles from './index.module.css'
import { Link } from '@/components/Link'
import { useNavigate } from '@/hooks/useNavigate'
import { useI18next } from '@/hooks/useI18next'

export function Page() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [, changeLang] = useI18next()

  return (
    <>
      <div className={classnames('tw-italic', styles.pageA)}>
        <Link href='/'>to Index</Link>
        <Button onClick={() => changeLang('en')}>切换语言</Button>

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
            {t('home.name')}
          </div>
        </div>
      </div>
    </>
  )
}
