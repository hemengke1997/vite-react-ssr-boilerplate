import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pm2 from 'pm2'
import { log } from '../scripts/utils'

const dir = path.dirname(fileURLToPath(import.meta.url))

const processName = `process-name`

const isDev = process.env.NODE_ENV === 'development'

const options = isDev
  ? {
      exec_mode: 'fork',
    }
  : {
      exec_mode: 'cluster',
      instances: 0,
      node_args: '--harmony',
      env: {
        NODE_ENV: process.env.NODE_ENV,
      },
    }

async function runPm2() {
  pm2.connect((err) => {
    if (err) {
      log.error(`\n[pm2]: connect error\n${err}`)
      process.exit(1)
    }

    pm2.reload(processName, (e) => {
      if (e) {
        pm2.start(
          {
            script: path.resolve(dir, './index.js'),
            name: processName,
            watch: false,
            ...options,
          },
          (err) => {
            log.info(`\n[pm2]: start`)
            if (err) {
              log.error(`\n[pm2]: start error \n ${err}`)
              log.info(`\n[pm2]: restart`)
              pm2.reload(processName, () => {
                log.success(`\n[pm2]: reload success`)
                return pm2.disconnect()
              })
              return pm2.disconnect()
            }

            log.success(`\n[pm2]: start success`)
            pm2.disconnect()
          },
        )
      } else {
        log.success(`\n[pm2]: reload success`)
        pm2.disconnect()
      }
    })
  })
}

try {
  runPm2()
} catch {
  log.error(`\n[pm2]: something wrong`)
  process.exit(1)
}
