const __APP_INFO__: {
  lastBuildTime: string
}

interface Window {
  _hmt?: any[]
  initGeetest?: any
  isMobile: boolean
  checkPlatform: boolean
}

// 设备类型
enum Device {
  mobile = 'mobile',
  pc = 'pc',
}

type DeviceType = keyof typeof Device
