import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { Link } from '@/components/Link'
import { useNavigate } from '@/hooks/useNavigate'
import { useI18next } from '@/hooks/useI18next'

export function Page() {
  const { t } = useTranslation()
  const [navigate] = useNavigate()
  const { changeLocale } = useI18next()

  return (
    <>
      <div className='italic text-[20px]'>
        <Button onClick={() => changeLocale('zh')} type='default'>
          切换中文
        </Button>
        <Button onClick={() => changeLocale('en')} type='primary'>
          change to english
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

        <Button onClick={() => navigate('/')}>点击跳转index</Button>
        <Button onClick={() => navigate('/', { locale: 'en' })}>点击跳转index en</Button>
        <Button onClick={() => navigate('/', { locale: 'zh' })}>点击跳转index 中文</Button>

        <Link href='/'>to Index</Link>

        <p>this is page A</p>
      </div>
    </>
  )
}
