import path from 'path'
import pm2 from 'pm2'

const processName = `pm2-progress-name`

async function runPm2() {
  pm2.connect((err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    pm2.start(
      {
        script: path.resolve(__dirname, '../server/index.js'),
        name: processName,
      },
      (err) => {
        if (err) {
          pm2.restart(processName, () => {
            return pm2.disconnect()
          })
          return pm2.disconnect()
        }
        pm2.disconnect()
      },
    )
  })
}

try {
  runPm2()
} catch {
  process.exit(1)
}
