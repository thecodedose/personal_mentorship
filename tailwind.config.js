/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ejs}"],
  theme: {
    extend: {
      dropShadow: {
        solid: "6px 6px #1a2e05",
      },
    },
  },
  plugins: [],
}
