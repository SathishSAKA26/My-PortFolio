/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-light': '#4bd5ff',
        'blue-bg': '#2c2c6c',
        'bg-color': '#1f1f38',
        'white': '#fff',
        'primary-variant': '[rgba(77, 181, 255, 0.4)]',
        'color-light': '[rgba(225, 225, 225, 0.6)]',
      },
    },
  },
  plugins: [],
};
