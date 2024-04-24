/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0,0%,90%)",
        black: "hsl(0,0%,8%)",
        gray: "hsl(0,4%,10%)",
      },
    },
  },
  plugins: [],
};
