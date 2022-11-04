// 设备类型
export enum Device {
  mobile = 'mobile',
  pc = 'pc',
}

export type DeviceType = keyof typeof Device
