/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        'header-font':['"Metamorphous"', 'serif']
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.runescape.com/img/rsp777/title2/rslogo3.png') no-repeat center",
      }
    },
  },
  plugins: [],
}
