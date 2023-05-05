/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      cyan: "hsl(179, 62%, 43%)",
      "bright-yellow": "hsl(71, 73%, 54%)",
      "light-gray": "hsl(204, 43%, 93%)",
      "grayish-blue": "hsl(218, 22%, 67%)"
    },
    screens:{
      mobile: "375px",
      laptop: "1440px"
    },
    extend: {
      fontFamily:{
        'karla': ['Karla', 'sans-serif']
      },
      fontWeight: {
        regular: 400,
        bold: 700
      }
    },
  },
  plugins: [],
}

