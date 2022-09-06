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
        'bgLight': '#FAFAFA',
        'bgDark': '#041F31',
        'textDark': '#BDEBEA',
        'textLight': '#1F2626',
      },
      boxShadow: {
        sLight: '2px 2px 32px rgba(40, 38, 44, 0.15)',
        sDark: '2px 4px 16px 0px rgba(10,77,121,0.2)',
      },
    },
  },
  plugins: [],
}
