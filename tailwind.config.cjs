/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}", // Include Storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
