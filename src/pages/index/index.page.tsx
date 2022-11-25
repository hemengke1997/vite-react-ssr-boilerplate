import classnames from 'classnames'
import { Button } from 'antd'
import { Link } from '@/components/Link'
import { useLoginModalStore } from '@/components/pc/LoginModal/hooks/useLoginModalStore'

export function Page() {
  const { setVisible } = useLoginModalStore((state) => ({
    setVisible: state.setVisible,
  }))

  return (
    <>
      <Button type='primary' onClick={() => setVisible(true)}>
        open modal
      </Button>

      <Link href='/a'>to A</Link>
      <div className={classnames('tw-italic')}>this is index</div>
    </>
  )
}
