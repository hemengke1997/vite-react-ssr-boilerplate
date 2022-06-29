module.exports = () => {
  return {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss'),
      require('postcss-viewport-units'),

      // .class {
      //   padding-top: 10px; /* px-to-viewport-ignore */
      //   /* px-to-viewport-ignore-next */
      //   padding-bottom: 10px;
      //   /* Any other comment */
      //   border: 1px solid black;
      //   margin-bottom: 1px;
      //   font-size: 20px;
      //   line-height: 30px;
      // }
      require('@minko-fe/postcss-px-to-viewport')({
        unitToConvert: 'px',
        viewportWidth: 1920,
        unitPrecision: 5,
        propList: ['*', '!border'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 1920,
      }),
    ],
  }
}
