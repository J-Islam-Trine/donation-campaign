/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          "very-dark-grey" : "#0B0B0B",
          "light-red" : "#FF444A"
        }
    },
  },
  plugins: [require("daisyui")],
}