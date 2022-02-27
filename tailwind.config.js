const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        large: '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: 'Flow',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ]
};
