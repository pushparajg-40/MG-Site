/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        '2xl-plus': '102rem',
      },
        maxWidth: {
        '8xl': '90rem', // 1440px (you can change this)
        '9xl':'100rem'
      },
    },
  },
  plugins: [],
};
