import '@/assets/style/mobile/index.css'

function MobileLayout({ children }: { children: React.ReactNode }) {
  return <div className='layout'>{children}</div>
}

export { MobileLayout }
