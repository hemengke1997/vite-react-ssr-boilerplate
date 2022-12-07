const path = require('node:path')
const fs = require('fs-extra')
const { camelCase } = require('change-case')

const vars = fs.readFileSync(path.resolve(__dirname, './src/assets/style/vars/light.css'), 'utf8')

const getVarsToken = (cssVars) => {
  const token = {}
  const varsList = cssVars?.match(/--[\w|-]+:[^;]+/g) || []

  varsList.forEach((item) => {
    const k = camelCase(item.split(':')[0]?.trim())

    const v = `var(${item.split(':')[0]?.trim()})`
    token[k] = v
  })

  return token
}

const token = getVarsToken(vars)

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./renderer/**/*.{jsx,tsx}', './src/**/*.{jsx,tsx}'],
  prefix: '',
  theme: {
    // 如果开发以pc优先，则自定义以下screens。否则使用默认screens即可
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: token,
    },
  },
  corePlugins: {
    preflight: true,
  },
}
