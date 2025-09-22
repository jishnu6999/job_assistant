/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#0f766e',
        accent: '#06b6d4',
        soft: '#eef2f3'
      },
      boxShadow: {
        'soft-lg': '0 10px 25px rgba(2,6,23,0.08)'
      }
    }
  },
  plugins: []
}
