/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindcssAnimated from "tailwindcss-animated";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      divAppear: {
        "0%": { opacity: 0, width: "0%" },
        "100%": { opacity: 1, width: "100%" },
      },
    },
    animation: {
      divAppear: "divAppear 1s ease-out",
    },
  },

  plugins: [daisyui, tailwindcssAnimated],
  daisyui: {
    themes: ["cupcake"],
  },
};
