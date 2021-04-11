module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Titillium Web'],
  },
    extend: {
      colors: {
        manatee: {
          '50':  '#fafafa',
          '100': '#f3f1f4',
          '200': '#e4dbe8',
          '300': '#c5b6cb',
          '400': '#a48ca7',
          '500': '#866885',
          '600': '#6c4d66',
          '700': '#51394b',
          '800': '#372633',
          '900': '#251e25',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
