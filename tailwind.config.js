// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui‑sans‑serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
