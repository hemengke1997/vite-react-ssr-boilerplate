import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import inquirer from 'inquirer'
import colors from 'picocolors'
import shelljs from 'shelljs'
import { Device } from '@root/shared/device'
import { log } from './utils'

const dir = path.dirname(fileURLToPath(import.meta.url))

function startServer(name: string) {
  try {
    shelljs.exec(`cross-env Start_Page=${name} pnpm run ssr`, { async: true })
  } catch {
    process.exit(1)
  }
}

function getPageName() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'pageName',
        message: log.info(`请输入页面名?${colors.dim(colors.gray('(回车默认开发第一个页面):'))}`, false),
      },
    ])
    .then(async (res) => {
      const { pageName } = res
      let name = pageName.replace(/\s/g, '') as string

      if (!name) {
        const files = fs.readdirSync(path.resolve(dir, '../src/pages'))
        name = files[0]
        log.info(`💪  启动`)
        startServer(name)
        return
      }
      try {
        fs.readdirSync(path.resolve(dir, `../src/pages/${(name as string).toLocaleLowerCase()}`))
        log.warn(`\n💫  [${name}]: 页面已存在,开启dev模式 👀 \n`)
        startServer(name)
      } catch {
        let isMobile = false
        if (name.endsWith('-m')) {
          isMobile = true
        } else {
          const res = await inquirer.prompt([
            {
              type: 'list',
              name: 'type',
              message: 'PC or 移动端?',
              choices: [Device.pc, Device.mobile],
            },
          ])

          if (res.type === Device.mobile) {
            isMobile = true
          } else {
            isMobile = false
          }
        }

        const config = {
          title: name,
          isMobile,
        }

        log.info(`\n🤖 [${name}]:创建页面中...🎈\n`)
        fs.mkdirSync(path.resolve(dir, `../src/pages/${name}`))
        fs.mkdirSync(path.resolve(dir, `../src/pages/${name}/images`))
        fs.writeFileSync(path.resolve(dir, `../src/pages/${name}/index.module.css`), '')
        const tsxTpl = fs.readFileSync(path.resolve(dir, '../template/index.tpl')).toString()
        fs.writeFileSync(path.resolve(dir, `../src/pages/${name}/index.page.tsx`), tsxTpl)

        let serverTpl = fs.readFileSync(path.resolve(dir, '../template/server.tpl')).toString()

        serverTpl = serverTpl.replace(/{{(.*?)}}/gi, (_, p1) => {
          return config[p1.trim()]
        })
        fs.writeFileSync(path.resolve(dir, `../src/pages/${name}/index.page.server.ts`), serverTpl)

        log.success(
          `✅ 模板创建成功，在 [${colors.underline(
            `src/pages/${name}/index.page.tsx`,
          )}](ctrl + 单击跳转)\n开始愉快的开发吧~ ✨\n`,
        )

        log.info(`\n🔜 请记得在 page.server.ts 中完善TDK等`)

        startServer(name)
      }
    })
}

try {
  getPageName()
} catch {
  process.exit(1)
}
