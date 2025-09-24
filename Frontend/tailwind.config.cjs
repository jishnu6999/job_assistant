/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#2563eb",     // blue-600
        brandDark: "#1d4ed8", // blue-700
        ink: "#0f172a"        // slate-900
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
