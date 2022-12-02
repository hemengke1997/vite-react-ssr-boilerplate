import classnames from 'classnames'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useGlobalContext } from '@root/renderer/useGlobalContext'
import { Theme } from '@root/renderer/theme'
import { Link } from '@/components/Link'
import { useI18next } from '@/hooks/useI18next'

export function Page() {
  const { setTheme } = useGlobalContext()

  const [, changeLang] = useI18next()

  const { t } = useTranslation()

  return (
    <>
      <Button onClick={() => changeLang('zh')} type='default'>
        切换中文
      </Button>
      <Button onClick={() => changeLang('en')} type='primary'>
        change to english
      </Button>

      <Button onClick={() => setTheme(Theme.light)} type='ghost'>
        light主题
      </Button>
      <Button onClick={() => setTheme(Theme.dark)} type='text'>
        dark主题
      </Button>

      <div>
        {t('home.hello')}
        {t('home.name')}
        <div>
          <span className='text-colorPrimary'>{t('home.complex.fisrt')}</span>
          <p>{t('home.complex.second')}</p>
          <span>{t('home.complex.something', { x: '123213' })}</span>
        </div>
      </div>

      <Link href='/a'>to A</Link>
      <div className={classnames('tw-italic')}>this is index</div>
    </>
  )
}
