/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#303030",
        lightgrey: "#F1F1F1",
        darkgrey: "#878787",
        yellow: "#FFD95D",
        red: "#FF9090",
        green: "#90FFA5",
        blue: "#90AFFF",
      },
    },
  },
  plugins: [],
};
