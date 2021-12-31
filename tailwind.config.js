module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        cyan: {
          800: "hsl(184, 100%, 22%)",
          900: "hsl(179, 100%, 13%)",
        },
        "light-gray": "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        "lexend-deca": ["Lexend Deca", "sans-serif"],
        "big-shoulders": ["Big Shoulders Display", "cursive"],
      },
      screens: {
        md: "945px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
