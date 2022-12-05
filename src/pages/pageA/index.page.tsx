import { useTranslation } from 'react-i18next'
import { Button, Card, Space } from 'antd'
import { Link } from '@/components/Link'
import { useNavigate } from '@/hooks/useNavigate'
import { useI18next } from '@/hooks/useI18next'

export function Page() {
  const { t } = useTranslation()
  const [navigate] = useNavigate()
  const { changeLocale } = useI18next()

  return (
    <Card title='pageA-example'>
      <div className='italic text-[20px]'>
        <Space>
          <Button onClick={() => changeLocale('zh')} type='default'>
            切换中文
          </Button>
          <Button onClick={() => changeLocale('en')} type='primary'>
            change to english
          </Button>
        </Space>
        <div className='my-4 flex space-x-4'>
          <p>
            {t('home.hello')} {t('home.name')}
          </p>

          <span className='text-colorPrimary'>{t('home.complex.fisrt')}</span>
          <p>{t('home.complex.second')}</p>
          <span>{t('home.complex.something', { x: '特别的翻译' })}</span>
        </div>

        <Space>
          <Button onClick={() => navigate('/')}>点击跳转index</Button>
          <Button onClick={() => navigate('/', { locale: 'en' })}>点击跳转index en</Button>
          <Button onClick={() => navigate('/', { locale: 'zh' })}>点击跳转index 中文</Button>
        </Space>

        <Button type='link'>
          <Link href='/'>链接跳转index</Link>
        </Button>
      </div>
    </Card>
  )
}
