module.exports = {
  mode: 'jit',
  purge: [
  './components/**/*.{vue,js}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#144552',
     }),
     textColor: theme => ({
      ...theme('colors'),
      'primary': '#144552',
     }),
    fontFamily: {
      'brand': ['bluunext'],
      'sans': ['Raleway']
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('../images/heading.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
