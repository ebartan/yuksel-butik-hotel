module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Dancing Script', 'cursive'],
  },
    extend: {
      colors: {
        odalar: '#F28807',
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
        steel: {
          '50':  '#f2f7f8',
          '100': '#d5f1f8',
          '200': '#a5e3f0',
          '300': '#6ec7dc',
          '400': '#35a5c0',
          '500': '#0489be',
          '600': '#216d89',
          '700': '#1d526b',
          '800': '#16384d',
          '900': '#0e2234',
        },
        olive: {
          '50':  '#faf9f0',
          '100': '#f8efa3',
          '200': '#eedf61',
          '300': '#fccc34',
          '400': '#aa951b',
          '500': '#88780c',
          '600': '#6d6008',
          '700': '#544808',
          '800': '#3a3208',
          '900': '#281f07',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
