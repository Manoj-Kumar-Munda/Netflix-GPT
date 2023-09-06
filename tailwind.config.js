/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        '3xl' : '1920px',
      },
      backgroundImage : {
        'hero-bg' : "url('./assets/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
}
