import create from 'zustand'

interface IStore {
  x: string
  setX: (x: string) => void
}

// Example
const useMobilePayModalStore = create<IStore>((set) => {
  return {
    x: '',
    setX: (x) => set({ x }),
  }
})

export { useMobilePayModalStore }
