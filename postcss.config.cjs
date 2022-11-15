module.exports = () => {
  return {
    plugins: [
      require('tailwindcss/nesting'),
      require('tailwindcss'),
      require('@minko-fe/postcss-pxtorem')({
        rootValue({ file }) {
          return file.includes('node_modules/react-vant') ? 8 : 16
        },
        replace: true,
        minPixelValue: 1,
        atRules: false,
        propList: ['*'],
        exclude(file) {
          return file.includes('assets/style') || file.includes('node_modules/antd')
        },
      }),
      require('autoprefixer'),
    ],
  }
}
