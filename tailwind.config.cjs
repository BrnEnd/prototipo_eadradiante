/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7dc",
          100: "#ffe9a6",
          200: "#ffd36a",
          300: "#ffbc34",
          400: "#ffac12",
          500: "#f79905",
          600: "#da7b02",
          700: "#b25a02",
          800: "#894303",
          900: "#6a3405"
        },
        navy: {
          950: "#000619",
          900: "#010d24",
          800: "#032050",
          700: "#042c6d",
          600: "#063786"
        },
        mute: "#c0cff5"
      },
      boxShadow: {
        glow: "0 18px 44px rgba(3, 13, 36, 0.55)",
        badge: "0 12px 24px rgba(255, 213, 95, 0.18)"
      }
    }
  },
  plugins: []
};
