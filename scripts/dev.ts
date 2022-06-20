import inquirer from 'inquirer'
import colors from 'picocolors'
import fs from 'node:fs'
import path from 'node:path'
import { log, run } from './utils'

enum Type {
  mobile = 'mobile',
  pc = 'pc',
}

function getSpecialsName() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'specialsName',
        message: log.info(`请输入专题名?(${colors.bgBlue('回车开发全部页面')}):`, false),
        default: 'all',
      },
    ])
    .then(async (res) => {
      const { specialsName } = res
      const name = specialsName.replace(/\s/g, '')

      // 在src/pages下查找是否存在name，若存在，提示重新输入，否则，创建模板
      try {
        // 大小写敏感
        fs.readdirSync(path.resolve(__dirname, `../src/pages/${(name as string).toLocaleLowerCase()}`))
        // 目录存在，开启server
        log.warn(`【${name}】：页面已存在，开启dev模式🦾`)
        run('npm', ['run', 'ssr', `--page=${name}`])
      } catch {
        // 是否移动端
        let isMobile = false
        const res = await inquirer.prompt([
          {
            type: 'list',
            name: 'type',
            message: 'PC or 移动端?',
            choices: [Type.pc, Type.mobile],
          },
        ])

        if (res.type === Type.mobile) {
          isMobile = true
        } else {
          isMobile = false
        }
        const config: any = {
          title: name,
          isMobile,
        }

        log.info(`【${name}】：创建页面中...🎈`)
        // 创建目录
        fs.mkdirSync(path.resolve(__dirname, `../src/pages/${name}`))
        // 创建images文件夹
        fs.mkdirSync(path.resolve(__dirname, `../src/pages/${name}/images`))
        // 读取vue模板
        const vueTpl = fs.readFileSync(path.resolve(__dirname, '../template/index.vue')).toString()
        // 写vue模板
        fs.writeFileSync(path.resolve(__dirname, `../src/pages/${name}/index.page.vue`), vueTpl)
        // 读取serverjs
        let serverTpl = fs.readFileSync(path.resolve(__dirname, '../template/index.page.server.tpl')).toString()

        // 模板匹配
        serverTpl = serverTpl.replace(/{{(.*?)}}/gi, (_, p1) => {
          return config[p1.trim()]
        })
        // 写serverjs
        fs.writeFileSync(path.resolve(__dirname, `../src/pages/${name}/index.page.server.ts`), serverTpl)

        log.success(
          `✨模板创建成功，在 [${colors.underline(
            `src/pages/${name}/index.page.vue`,
          )}](ctrl + 单击跳转)\n开始愉快的开发吧~😊`,
        )
      }
    })
}

try {
  getSpecialsName()
} catch {
  process.exit(1)
}
