/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('./assets/Lord.jpg')",
        "imageContent-background": "url('./assets/swiss.jpg')",
        "hotelBackground-Image":"url('./assets/tour-bg.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};