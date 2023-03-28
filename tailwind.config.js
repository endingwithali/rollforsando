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
        'hero': "url('https://www.runescape.com/img/rsp777/bg2.jpg')",
        'input': "url('https://www.runescape.com/img/rsp777/scroll/backdrop_745.gif')",
        'scrolltop': "url('https://www.runescape.com/img/rsp777/scroll/backdrop_765_top.gif')",
        'scrollbottom': "url('https://www.runescape.com/img/rsp777/scroll/backdrop_765_top.gif')",
      }
    },
  },
  plugins: [],
}
