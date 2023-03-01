/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        temperature: '0 1vw 1vw rgba(0 0 0 / 0.5)',
      },
      borderRadius: {
        temperature: '1vw',
      },
    },
  },
  plugins: [],
};
