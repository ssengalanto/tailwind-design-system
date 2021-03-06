module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dddefc',
          200: '#babdf9',
          300: '#989cf7',
          400: '#757bf4',
          500: '#535af1',
          600: '#4248c1',
          700: '#323691',
          800: '#212460',
          900: '#111230',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['focus-visible'],
      ringWidth: ['focus-visible'],
      ringOpacity: ['focus-visible'],
      borderColor: ['focus-visible'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
