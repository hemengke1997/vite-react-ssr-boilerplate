import create from 'zustand'

interface LoginModalState {
  visible: boolean
  setVisible: (v: boolean) => void
}

const useLoginModalStore = create<LoginModalState>((set) => {
  return {
    visible: false,
    setVisible: (visible: boolean) => {
      set({ visible })
    },
  }
})

export { useLoginModalStore }
