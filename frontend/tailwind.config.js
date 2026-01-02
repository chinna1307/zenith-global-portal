/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. FASTER SPEED (5 seconds)
      animation: {
        blob: "blob 5s infinite", 
      },
      // 2. LEFT-TO-RIGHT MOVEMENT
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          // Move 400px to the RIGHT
          "50%": { transform: "translate(400px, 0px) scale(1.1)" }, 
          // Move back to START
          "100%": { transform: "translate(0px, 0px) scale(1)" }, 
        },
      },
    },
  },
  plugins: [],
}