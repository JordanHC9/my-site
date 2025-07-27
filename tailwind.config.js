/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // wherever your HTML lives:
    "./dist/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        // map Tailwind’s "font-sans" to Inter first
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
