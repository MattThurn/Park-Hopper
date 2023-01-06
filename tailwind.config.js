/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.handlebars', './views/*/*.handlebars'],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./public/images/background.png')",
      },
    },
  },
  plugins: [],
};
