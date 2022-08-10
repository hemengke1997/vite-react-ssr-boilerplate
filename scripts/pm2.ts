import path from 'path'
import pm2 from 'pm2'

const processName = `act`

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
          console.error(err)
          return pm2.disconnect()
        }
        pm2.list(() => {
          pm2.restart(processName, () => {
            pm2.disconnect()
          })
        })
      },
    )
  })
}

try {
  runPm2()
} catch {
  process.exit(1)
}
