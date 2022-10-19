/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'darkGray': '#333333',
        'lightBlue' : '#1473E6',
      }
    },
  },
  plugins: [],
};