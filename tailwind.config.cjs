/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {},
    colors: {
      'black-light': "#0c111a",
      'white-light': "#dedede",
      'gray-light': "#6d9fd1",
      'white-gray': '#cccc'
    },
    extend: {},
  },
  plugins: [],
}
