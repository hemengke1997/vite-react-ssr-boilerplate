import tailwindcssNesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import pxtorem from '@minko-fe/postcss-pxtorem'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcssNesting(),
    tailwindcss(),
    pxtorem({
      rootValue({ file }) {
        return file.includes('node_modules/react-vant') ? 8 : 16
      },
      replace: true,
      minPixelValue: 1,
      atRules: false,
      propList: ['*'],
      exclude(file) {
        return file.includes('node_modules/antd')
      },
    }),
    autoprefixer(),
  ],
}
