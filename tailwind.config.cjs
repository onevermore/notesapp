/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const primary = "#c78082";
module.exports = {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      green: {
        400: "#7fbcbf",
        600: "#378589",
        700: "#2f7073",
      },
      gray: {
        300: "#d9dae8",
        500: "#999AA5",
        600: "#66676E",
        700: "#39393f",
        800: "#242529",
        900: "#191B1F",
        950: "#101215",
      },
      transparent: colors.transparent,
    },

    extend: {
      spacing: {
        0.5: "0.12rem",
        layout: "2.75rem",
      },
      fontSize: {
        "2lg": "1.38rem",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)",
          },
          "50%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        fade: "fade .5s ease-in-out",
        scaleIn: "scaleIn .35s ease-in-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        ".btn-primary": {
          backgroundColor: primary,
          color: "#fff",
          borderRadius: "0.65rem",
          transition: "background-color .3s ease-in-out",
          "&:hover": {
            backgroundColor: "#a4686a",
          },
        },
        ".btn-secondary": {
          backgroundColor: theme("colors.green.600"),
          color: "#fff",
          borderRadius: "0.65rem",
          transition: "background-color .3s ease-in-out",
          "&:hover": {
            backgroundColor: "#2f7073",
          },
        },

        ".air-block": {
          borderRadius: theme("borderRadius.layout"),
          backgroundColor: theme("colors.gray.950"),
          color: theme("colors.white"),
          boxShadow: theme("boxShadow.lg"),
        },

        ".note-card": {
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#7fbcbf",
        },
      }),
        addUtilities({
          ".flex-center-between": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
        });
    }),
  ],
};
