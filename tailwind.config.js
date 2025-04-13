import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        agraham:['Agraham','sans-serif'],
        teachers:['Teachers','sans-serif'],
        oswald:["Oswald",'sans-serif']
      },
      colors:{
        mydefault:"#ffc75f",
        myblue:"#00c6d7",
        mypurple:"#da77f2"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
