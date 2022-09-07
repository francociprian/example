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
      screens: {
        '480Max': {'max':'480px'},
        '680Max': {'max':'680px'},
        '768Max': {'max': '768px'},
        '876Max': {'max': '876px'},
        '1024Max': {'max': '1024px'},
        '1216Max': {'max': '1216px'},
        '1280Max': {'max': '1280px'},
        '1480Max': {'max': '1480px'},
        '1600Max': {'max': '1600px'},
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
}
