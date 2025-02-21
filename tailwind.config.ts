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
        backgroundColor:"#F7F8F4",
        yellowBGC:"#F0EA9B",
        babyBlue:"#D8DFE2",
      },
    },
  },
  plugins: [],
} satisfies Config;
