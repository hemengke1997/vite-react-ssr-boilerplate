import inquirer from 'inquirer'
import colors from 'picocolors'
import fs from 'fs'
import path from 'path'
import { log } from './utils'

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
        message: log.info(`请输入专题名?(${colors.bgBlue('回车开发全部专题')}):`, false),
        default: 'all',
      },
    ])
    .then((res) => {
      const { specialsName } = res
      const name = specialsName.replace(/\s/g, '')

      // 在src/pages下查找是否存在name，若存在，提示重新输入，否则，创建模板
      try {
        // 大小写敏感
        fs.readdirSync(path.resolve(__dirname, `../src/pages/${(name as string).toLocaleLowerCase()}`))
        // 目录存在，重新输入
        log.error(`\n${name}文件夹已存在，请重新输入\n`)
        return getSpecialsName()
      } catch {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'type',
              message: 'PC or 移动端?',
              choices: [Type.pc, Type.mobile],
            },
          ])
          .then((res) => {
            const { type } = res

            const mobileMeta = 'maximum-scale=1.0, user-scalable=no'

            if (type === Type.pc) {
              // pc
            }

            if (type === Type.mobile) {
              // 移动端
            }
          })
        // 创建目录以及文件
        // fs.mkdir(path.resolve(__dirname, `../src/pages/${name}`), (err) => {
        //   if (!err) {
        //     // fs.writeFileSync()
        //   }
        // })
      }
    })
}

getSpecialsName()
