/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./renderer/**/*.{jsx,tsx}', './src/**/*.{jsx,tsx}'],
  prefix: '',
  theme: {
    // 如果开发以pc优先，否则使用默认screens即可
    // pc first
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
      colors: {
        primaryColor: 'var(--color-primary)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}
