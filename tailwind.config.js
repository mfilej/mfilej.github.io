module.exports = {
  mode: 'jit',
  purge: [
    '_site/*.html'
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
