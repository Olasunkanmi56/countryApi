/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm:"375px",
      md:"768px",
      lg:"970px",
      xl:"1440px"
    },
    extend: {
        // colors: {
        //     DarkElements:" hsl(209, 23%, 22%)",
        //     DarkBackground:" hsl(207, 26%, 17%)",
        //     LightText:" hsl(200, 15%, 8%)",
        //     LightInput:" hsl(0, 0%, 52%)",
        //     LightBackground: "hsl(0, 0%, 98%)",
        //     White: "hsl(0, 0%, 100%)"
        // } 
    },
  },
  plugins: [],
};