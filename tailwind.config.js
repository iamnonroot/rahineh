const WithOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    return opacityValue === undefined
      ? `rgb(var(--rahineh-theme-${variable}-rgb))`
      : `rgba(var(--rahineh-theme-${variable}-rgb), ${opacityValue})`;
  };
};

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}", "./projects/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
      },
      colors: {
        primary: WithOpacityValue("primary"),
        accent: WithOpacityValue("accent"),
        warn: WithOpacityValue("warn"),
        surface: WithOpacityValue("surface"),
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
      },
    },
  },
  plugins: [],
};