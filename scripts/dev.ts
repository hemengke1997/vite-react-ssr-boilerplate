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
        message: log.info(`请输入专题名?${colors.dim(colors.gray('(回车开发全部页面):'))}`, false),
        default: 'all',
      },
    ])
    .then(async (res) => {
      const { specialsName } = res
      const name = specialsName.replace(/\s/g, '')

      try {
        // case sensitive
        fs.readdirSync(path.resolve(__dirname, `../src/pages/${(name as string).toLocaleLowerCase()}`))
        // dir exist, open server
        log.warn(`\n💫  [${name}]: 页面已存在,开启dev模式 👀 \n`)
        run('npm', ['run', 'ssr', `--page=${name}`])
      } catch {
        // pc or mobile
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

        log.info(`\n🤖 [${name}]:创建页面中...🎈\n`)
        // make dir
        fs.mkdirSync(path.resolve(__dirname, `../src/pages/${name}`))
        // make images dir
        fs.mkdirSync(path.resolve(__dirname, `../src/pages/${name}/images`))
        // read vue template
        // const vueTpl = fs.readFileSync(path.resolve(__dirname, '../template/index.vue')).toString()
        // write vue template
        // fs.writeFileSync(path.resolve(__dirname, `../src/pages/${name}/index.page.vue`), vueTpl)
        const tsxTpl = fs.readFileSync(path.resolve(__dirname, '../template/index.tsx')).toString()
        fs.writeFileSync(path.resolve(__dirname, `../src/pages/${name}/index.page.tsx`), tsxTpl)

        // read serverjs
        let serverTpl = fs.readFileSync(path.resolve(__dirname, '../template/server.tpl')).toString()

        // match template
        serverTpl = serverTpl.replace(/{{(.*?)}}/gi, (_, p1) => {
          return config[p1.trim()]
        })
        // write serverjs
        fs.writeFileSync(path.resolve(__dirname, `../src/pages/${name}/index.page.server.ts`), serverTpl)

        log.success(
          `✅ 模板创建成功，在 [${colors.underline(
            `src/pages/${name}/index.page.tsx`,
          )}](ctrl + 单击跳转)\n开始愉快的开发吧~ ✨\n`,
        )

        // start server
        run('npm', ['run', 'ssr', `--page=${name}`])
      }
    })
}

try {
  getSpecialsName()
} catch {
  log.error('😥 oops, some bug happened\n')
  process.exit(1)
}
