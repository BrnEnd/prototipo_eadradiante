/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff8ed",
          100: "#ffe9d1",
          200: "#ffd4a3",
          300: "#ffbd73",
          400: "#ffa347",
          500: "#ff8a24",
          600: "#e76e07",
          700: "#bf5600",
          800: "#943f00",
          900: "#733200"
        },
        navy: {
          900: "#020817",
          800: "#04122a",
          700: "#061b3a",
          600: "#0a2b56"
        },
        mute: "#9db3d9"
      }
    }
  },
  plugins: []
};
