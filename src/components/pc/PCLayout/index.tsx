// import { ConfigProvider, message } from 'antd'
// import zh_CN from 'antd/lib/locale/zh_CN'
import '@/assets/style/pc/index.less'

// message.config({
//   maxCount: 1,
//   duration: 2,
//   transitionName: 'ant-zoom',
// })

function PCLayout({ children }: { children: React.ReactNode }) {
  return (
    // <ConfigProvider locale={zh_CN} autoInsertSpaceInButton={false}>
    //   {children}
    // </ConfigProvider>
    <>{children}</>
  )
}

export { PCLayout }
