module.exports = () => {
  return {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss'),
      require('postcss-pxtorem-media')({
        rootValue: 192,
        replace: true,
        minPixelValue: 2,
        mediaQuery: false,
        propList: ['*'],
        exclude: function (file) {
          return file.includes('node_modules')
        },
      }),
    ],
  }
}
