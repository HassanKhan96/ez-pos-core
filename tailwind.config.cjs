/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/renderer/index.html", "./src/renderer/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbeeff",
          500: "#1f7ae0",
          600: "#1763bb",
          700: "#145098"
        }
      },
      boxShadow: {
        panel: "0 10px 30px -15px rgb(15 23 42 / 0.35)"
      }
    }
  },
  plugins: []
};
