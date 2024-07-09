/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#2c2c2c',
        'c-text': '#525252'
      }
    },
  },
  plugins: [],
}