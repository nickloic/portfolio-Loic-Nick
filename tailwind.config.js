/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'soft-white': '#f1f1f1',
        'soft-black': '#000',
        'light-black': '#141414',
        'soft-red': '#cc1e28',
      },
    },
    fontFamily: {
      'adventure': ['adventure'],
      'harlow-solid': ['harlow solid'],
      'kristen': ['kristen ITC'],
      'monospace': ['monospace'],
    },
  },
  plugins: [],
}

