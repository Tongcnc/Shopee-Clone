const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "Primary-color": "rgb(246,65,45)",
      "Secondary-color": "rgb(254,99,51)",
      white: "rgb(255,255,255)",
      gray: "rgb(142,143,145)",
      dark: "#333",
      blue: "#0000EE",
      yellow: "rgb(255,233,122)",
      whitesmoke: "rgb(245,245,245)",
      RedMall: "rgb(208,1,27)",
      "Light-orange": "rgb(255,235,218)",
      "Light-gray": "rgb(245,245,245)",
    },
    extend: {},
  },
  plugins: [],
});
