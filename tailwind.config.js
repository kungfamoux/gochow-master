/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundColor: {
        dark: '#1a1a1a',
        'dark-lighter': '#2d2d2d',
      },
      textColor: {
        dark: '#ffffff',
        'dark-muted': '#a0a0a0',
      },
    },
  },
  plugins: [],
} 