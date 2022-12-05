module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    // 项目不需要pxtorem的话可以删除
    '@minko-fe/postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      minPixelValue: 1,
      convertUnitOnEnd: {
        sourceUnit: /[p|P][x|X]$/,
        targetUnit: 'px',
      },
      exclude(file) {
        return file.includes('node_modules/antd')
      },
      disable: true, // 禁用
    },
    // 项目不需要pxtoviewport的话可以删除
    '@minko-fe/postcss-pxtoviewport': {
      viewportWidth: 375,
      convertUnitOnEnd: {
        sourceUnit: /[p|P][x|X]$/,
        targetUnit: 'px',
      },
      exclude(file) {
        return file.includes('node_modules/antd')
      },
      disable: true, // 禁用
    },
    'autoprefixer': {},
  },
}
