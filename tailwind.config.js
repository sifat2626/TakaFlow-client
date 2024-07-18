/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
        meri: ['"Merriweather"', "serif"],
      },
      colors: {
        primary: "#0D3A35",
        "primary-light": "#254e49",
        "primary-bg": "#ADD5CA",
        secondary: "#6e8986",
        "hover-bg": "white",
      },
    },
  },
  plugins: [require("daisyui")],
};
