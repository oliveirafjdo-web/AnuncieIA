/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redutronBlue: "#0ea5e9",
        redutronGreen: "#22c55e",
        redutronDark: "#0b1220"
      },
      backgroundImage: {
        "redutron-gradient": "linear-gradient(90deg, #0ea5e9 0%, #22c55e 100%)"
      }
    },
  },
  plugins: [],
};
