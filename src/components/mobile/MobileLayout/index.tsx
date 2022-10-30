import '@/assets/style/mobile.less'

function MobileLayout({ children }: { children: React.ReactNode }) {
  return <div className='layout'>{children}</div>
}

export { MobileLayout }
