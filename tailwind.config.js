/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-in-2-cw": "rotate-in-2-cw 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "fade-in": "fade-in 1s ease-in forwards",
      },
      keyframes: {
        "rotate-in-2-cw": {
          "0%": {
            transform: "rotate(-45deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotate(0)",
            opacity: "1",
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
}
