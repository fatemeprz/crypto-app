/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#131315",
        dark: "#252220",
        darkName: "#9fa6b7",
        darkbox: "#242222",
        darkborder: "#404042",
        nemodar: "#18181ce6",
        bluePrimary: "#3874ff",
        backgroundPrimary: "#131315",
        blueCyan:"#00C4F4",
        text:"#CFCFCF"
        // backgroundPrimary: "linear-gradient(184deg, rgba(19,19,21,1) 0%, rgba(18,19,23,1) 0%, rgba(18,19,25,1) 0%, rgba(17,20,28,1) 25%, rgba(101,111,113,1) 100%)",
        // backgroundPrimary: "#002244",

      },
      fontSize: {
        medium: "17px",
      },
      width: {
        18: "72px",
      },
      height: {
        110: "440px",
      },
      maxWidth:{
        normal:"1200px"
      }
    },
    keyframes: {
      bounceRight: {
        '0%': {
          transform: 'translateX(100%)',
          opacity:"0"
        },
        '100%': {
          transform: 'translateX(0)',
          opacity:"1"
        },
      },
      bounceLeft: {
        '0%': {
          transform: 'translateX(-0%)',
          opacity:"1"
        },
        '100%': {
          transform: 'translateX(100%)',
          opacity:"0"
        },
      },
      
    },
    animation:{
      "bounce-right":"bounceRight 2s 1",
      "bounce-left":"bounceLeft 2s 1",

    }

  },
  plugins: [require("tailwind-scrollbar")],
};
