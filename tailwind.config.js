/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "Primary-color": "rgb(253,96,50)",
      white: "rgb(255,255,255)",
      gray: "rgb(142,143,145)",
      dark: "#333",
    },
    extend: {},
  },
  plugins: [],
};
