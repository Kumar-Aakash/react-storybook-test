/** @type {import('tailwindcss').Configuration} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'], // Specify the files where Tailwind should look for classes to purge
  darkMode: false, // Set to 'media' or 'class' if you want to enable dark mode
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
