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
        bangers: ['Bangers', 'Comic Sans MS', 'cursive', 'sans-serif']
      },
      animation: {
        floating: "floating 3s ease-in-out infinite", // Animation name and duration
        flip: "flip 1.5s ease-in-out forwards",
        logoFade: "fadeIn 3s ease-in-out forwards 1s", // Starts after flips
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" }, // Floating effect
        },
        flip: {
          "0%": { transform: "rotateY(90deg)", opacity: 0 },
          "50%": { transform: "rotateY(45deg)", opacity: 0.5 },
          "100%": { transform: "rotateY(0deg)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },      
    },
  },
  plugins: [],
}