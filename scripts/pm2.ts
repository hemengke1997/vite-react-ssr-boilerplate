import { fileURLToPath } from 'node:url'
import path from 'node:path'
import pm2 from 'pm2'
import { log } from './utils'

const dir = path.dirname(fileURLToPath(import.meta.url))

const processName = `act`

async function runPm2() {
  pm2.connect((err) => {
    if (err) {
      log.error(`\n [pm2]: connect error \n ${err}`)
      process.exit(1)
    }

    pm2.start(
      {
        script: path.resolve(dir, '../server/index.js'),
        name: processName,
      },
      (err) => {
        log.info(`[pm2]: start`)
        if (err) {
          log.error(`\n [pm2]: start error \n ${err}`)
          log.info(`\n [pm2]: restart`)
          pm2.restart(processName, () => {
            log.success(`\n [pm2]: restart success`)
            return pm2.disconnect()
          })
          return pm2.disconnect()
        }
        log.success(`\n [pm2]: start success`)
        pm2.disconnect()
      },
    )
  })
}

try {
  runPm2()
} catch {
  log.error(`\n [pm2]: something wrong`)
  process.exit(1)
}
