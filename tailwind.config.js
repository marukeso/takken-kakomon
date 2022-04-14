module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [{ pattern: /bg-/ }],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  // daisyUI config (optional)
  daisyui: {
    themes: ['light', 'dark'],
  },
}
