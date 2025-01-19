/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: '20%',
      },
      fontFamily: {
        bangers: ['Bangers', 'cursive'], // Add the Marvel font family
      },
      animation: {
        floating: "floating 3s ease-in-out infinite", // Animation name and duration
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" }, // Floating effect
        },
      },      
    },
  },
  plugins: [],
}