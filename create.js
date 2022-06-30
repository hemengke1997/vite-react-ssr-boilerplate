const fs = require('fs')
const path = require('path')

function create() {
  const config = {
    title: 'title',
    isMobile: true,
  }
  for (let i = 0; i < 700; i++) {
    fs.mkdirSync(path.resolve(__dirname, `./src/pages/page${i}`))

    fs.mkdirSync(path.resolve(__dirname, `./src/pages/page${i}/images`))
    const reactTpl = fs.readFileSync(path.resolve(__dirname, './template/index.tsx')).toString()

    // const vueTpl = fs.readFileSync(path.resolve(__dirname, './template/index.vue')).toString()
    let serverTpl = fs.readFileSync(path.resolve(__dirname, './template/server.tpl')).toString()
    // fs.writeFileSync(path.resolve(__dirname, `./src/pages/page${i}/index.page.vue`), vueTpl)
    fs.writeFileSync(path.resolve(__dirname, `./src/pages/page${i}/index.page.tsx`), reactTpl)
    serverTpl = serverTpl.replace(/{{(.*?)}}/gi, (_, p1) => {
      return config[p1.trim()]
    })
    fs.writeFileSync(path.resolve(__dirname, `./src/pages/page${i}/index.page.server.ts`), serverTpl)
  }
}

create()
