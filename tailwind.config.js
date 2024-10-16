/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/**/*.{html,js}",
    "./admin/*.html",
    "./*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#F5E8C8',
        "secondary": '#FFC080',
        "accent": '#8B4513',
        "offWhite": '#f7f7f7',
        "darkGrey": '#333333',
      },
      backgroundImage: {
        'hero-image': "url(../assets/images/IceSteak.webp)",
        'breakfast': "url(../assets/images/Catagory-Breakfast.webp)",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
