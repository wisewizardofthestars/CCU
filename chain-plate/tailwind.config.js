/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bio-green": "#10b981",
        "bio-dark": "#065f46",
      },
      fontFamily: {
        outfit: ['Outfit', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        inter: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        roboto: ['Roboto', '-apple-system', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
