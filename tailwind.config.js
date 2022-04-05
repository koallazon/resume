// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.vue", "./src/**/*.ts"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
      background: {
        light: "#ffffff",
        DEFAULT: "#ffffff",
        dark: "#000000",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    spacing: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
