/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./admin/*.html",
        "./*.html",
        "./js/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F5E8C8',
                primaryHover: '#C5B899',
                secondary: '#FFC080',
                accent: '#8B4513',
                offWhite: '#f7f7f7',
                darkGrey: '#333333',
            },
            backgroundImage: {
                'hero-image': "url(../assets/images/IceSteak.webp)",
                breakfast: "url(../assets/images/Catagory-Breakfast.webp)",
            },
        },
    },
};
