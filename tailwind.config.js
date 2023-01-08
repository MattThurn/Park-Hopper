/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.handlebars', './views/*/*.handlebars'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/images/bg-hills.png')",
      },
  },
  },
  plugins: [],
};
