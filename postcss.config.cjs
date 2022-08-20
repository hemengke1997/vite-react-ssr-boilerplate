module.exports = () => {
  return {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss'),
      require('@minko-fe/postcss-pxtorem')({
        rootValue: 16,
        replace: true,
        minPixelValue: 2,
        mediaQuery: false,
        propList: ['*'],
      }),
    ],
  }
}
