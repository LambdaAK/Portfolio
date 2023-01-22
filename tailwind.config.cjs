/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#7e22ce',
        blue: '#0E8595',
        ide: '#202531'
      }
    },
  },
  plugins: [],
}
