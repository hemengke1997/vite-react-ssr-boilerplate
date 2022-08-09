import { ConfigProvider, message } from 'antd'
import zh_CN from 'antd/lib/locale/zh_CN'

// import 'antd/dist/antd.less'

message.config({
  maxCount: 1,
  duration: 2,
  transitionName: 'ant-zoom',
})

function PCLayout({ children }) {
  return (
    <ConfigProvider locale={zh_CN} autoInsertSpaceInButton={false}>
      {children}
    </ConfigProvider>
  )
}

export default PCLayout
