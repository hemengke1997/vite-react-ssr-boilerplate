// import { ConfigProvider, message } from 'antd'
// import zh_CN from 'antd/locale/zh_CN'
import '@/assets/style/pc/index.css'

// message.config({
//   maxCount: 1,
//   duration: 2,
// })

function PCLayout({ children }: { children: React.ReactNode }) {
  // return (
  //   <ConfigProvider locale={zh_CN} autoInsertSpaceInButton={false}>
  //     {children}
  //   </ConfigProvider>
  // )
  return children
}

export { PCLayout }
