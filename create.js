const fs = require('node:fs')
const path = require('node:path')

function create() {
  const config = {
    title: 'title',
    isMobile: true,
  }
  for (let i = 0; i < 1000; i++) {
    fs.mkdirSync(path.resolve(__dirname, `./src/pages/page${i}`))

    fs.mkdirSync(path.resolve(__dirname, `./src/pages/page${i}/images`))

    // 读取vue模板
    const vueTpl = fs.readFileSync(path.resolve(__dirname, './template/index.vue')).toString()
    // 读取serverjs
    let serverTpl = fs.readFileSync(path.resolve(__dirname, './template/server.tpl')).toString()
    // 写vue模板
    fs.writeFileSync(path.resolve(__dirname, `./src/pages/page${i}/index.page.vue`), vueTpl)
    // 模板匹配
    serverTpl = serverTpl.replace(/{{(.*?)}}/gi, (_, p1) => {
      return config[p1.trim()]
    })
    // 写serverjs
    fs.writeFileSync(path.resolve(__dirname, `./src/pages/page${i}/index.page.server.ts`), serverTpl)
  }
}

create()
