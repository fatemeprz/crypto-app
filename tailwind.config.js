/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        body:"#131315",
        dark:"#252220",
        darkName:"#9fa6b7",
        darkbox:"#242222",
        darkborder:"#404042",
        nemodar:"#18181ce6"
      }
      ,fontSize:{
        medium:"17px"
      },width:{
        18:"72px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

