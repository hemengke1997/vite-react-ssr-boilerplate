import { UserConfig } from 'vite'
import { build } from 'vite'
import { setConfig } from '../config/vite/utils/config'
import { deepMerge } from '../config/vite/utils/helper'

!(async () => {
  await build(
    deepMerge<UserConfig>(setConfig({ isBuild: true, spa: true }), {
      build: {
        emptyOutDir: false,
      },
    }),
  )
})()
