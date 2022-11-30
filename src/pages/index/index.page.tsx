import classnames from 'classnames'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from '@/components/Link'
import { useLoginModalStore } from '@/components/pc/LoginModal/hooks/useLoginModalStore'
import { useI18next } from '@/hooks/useI18next'

export function Page() {
  const { setVisible } = useLoginModalStore((state) => ({
    setVisible: state.setVisible,
  }))

  const [, changeLang] = useI18next()

  const { t } = useTranslation()

  return (
    <>
      <Button type='primary' onClick={() => setVisible(true)}>
        open modal
      </Button>

      <Button onClick={() => changeLang('zh')}>切换中文</Button>
      <Button onClick={() => changeLang('en')}>切换english</Button>

      <div>
        {t('home.hello')}
        {t('home.name')}
        <div>
          <span className='text-[red]'>{t('home.complex.fisrt')}</span>
          <span>{t('home.complex.something', { x: '123213' })}</span>
        </div>
      </div>

      <Link href='/a'>to A</Link>
      <div className={classnames('tw-italic')}>this is index</div>
    </>
  )
}
