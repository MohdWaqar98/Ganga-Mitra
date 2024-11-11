/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ganga-blue': '#1e40af',
        'ganga-light': '#93c5fd',
      }
    },
  },
  plugins: [],
}