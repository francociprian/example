/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Tinos: ["Tinos", "serif"],
      },
      colors: {
        'textDark': '#BDEBEA',
        'textLight': '#1F2626',
      },
    },
  },
  plugins: [],
}
