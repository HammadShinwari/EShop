/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: 'rgba(255, 165, 0, 0.8)', // custom light orange color
        hoverColor: 'rgba(255, 165, 0, 1)',     // button hover color 
      },
    },
  },
  plugins: [],
}
