import { Modal } from 'antd'
import type { FC } from 'react'
import { useLoginModalStore } from './hooks/useLoginModalStore'
import { LoginContent } from './components/LoginContent'

const LoginModal: FC = () => {
  const { visible, setVisible } = useLoginModalStore((state) => ({
    visible: state.visible,
    setVisible: state.setVisible,
  }))

  return (
    <div>
      <Modal open={visible} centered footer={null} onCancel={() => setVisible(false)} maskClosable={false}>
        <LoginContent />
      </Modal>
    </div>
  )
}

export { LoginModal }
