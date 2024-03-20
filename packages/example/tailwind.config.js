/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-nord')],
};
