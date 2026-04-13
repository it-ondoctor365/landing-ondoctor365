/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2d418e",
        accent: "#32b9cc",
        "accent-dark": "#2aa3b5",
        "light-bg": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
