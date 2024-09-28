/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leaves': "url('../../../../assets/images/background-top.jpeg')",
      }
    },
  },
  plugins: [],
}