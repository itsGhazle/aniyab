/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "dana, sans-serif",
    },
    extend: {
      spacing: {
        72: "18rem",
      },
      backgroundImage: {
        "hero-pattern": "url('public/large bg.png')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
