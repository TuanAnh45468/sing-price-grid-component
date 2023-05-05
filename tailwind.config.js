/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      cyan: "#2BB3B1",
      "light-cyan": "#4ABEBD",
      "bright-yellow": "#BFDE33",
      "light-yellow": "#afcc2f",
      "light-gray": "#E6EFF6",
      "grayish-blue": "hsl(218, 22%, 67%)",
      white: "#fff",
    },
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
