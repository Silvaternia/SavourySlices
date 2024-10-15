/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html", "./node_modules/flowbite/**/*.js"],
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
        'hero-image': "url(../assets/images/IceSteak.jpg)",
        'breakfast': "url(../../src/assets/images/Catagory-Breakfast.jpg)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

