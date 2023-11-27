const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ShadowRoot: {
        "text-shadow-xl": "2px 2px 10px black",
      },
    },
  },
  plugins: [],
});
