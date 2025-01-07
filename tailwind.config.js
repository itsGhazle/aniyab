/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Vazirmatn, serif",
    },
    extend: {
      spacing: {
        72: "18rem",
      },
    },
  },
  plugins: [],
};