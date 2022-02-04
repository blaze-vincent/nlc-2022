const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      lime: colors.lime,
      orange: colors.orange,
      white: colors.white,
      "ironore": "#0E0A01"
    },
    extend: {},
  },
  plugins: [],
}
