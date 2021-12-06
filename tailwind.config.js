const colors = require("tailwindcss/colors");

/**
 * @type {import("tailwindcss/defaultConfig")}
 */

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      colors: { sky: colors.sky, ...colors },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "4rem",
          lg: "6rem",
          xl: "6rem",
          "2xl": "10rem",
        },
      },
    },
    fontFamily: {
      mono: ["Montserrat", "mono"],
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
