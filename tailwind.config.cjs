/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6fafe",
          100: "#c6f3fb",
          200: "#8ee6f6",
          300: "#5bd6ee",
          400: "#2ec3e4",
          500: "#19a7c9",
          600: "#1186a3",
          700: "#0f6a82",
          800: "#0f5366",
          900: "#0e4453"
        },
        ink: "#e2e8f0",
        base: "#0f172a",
        mute: "#94a3b8"
      }
    }
  },
  plugins: []
};