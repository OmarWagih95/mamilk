import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#2C5694",
        secondary:"#1b3d6d",
        boyPrimary:"#2C5694",
        boySecondary:"#2C5694",
        girlPrimary:"#F0EA9B",
        girlSecondary:"#F0EA9B",
        boy1:"#2C5694",
        boy2:"#21406E",
        boy3:"#2C5694",
        girl1:"#F75085",
        girl2:"#F86292",
        girl3:"#F75085",
        pink0:"#edcbcf",
        pink1:"#edbbc1",
        pink2:"#cb808b",
        pink3:"#a35c6e",
        blue1:"#162a40",
        blue2:"#1a364e",
        backgroundColor:"#F7F8F4",
        backgroundColor2:"#FFF2F2",
        backgroundColor3:"#ECDCBF",
        backgroundColor4:"#ECDCBF",
        yellowBGC:"#F0EA9B",
        babyBlue:"#D8DFE2",
      },
    },
  },
  plugins: [],
} satisfies Config;
