/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindcssAnimated from "tailwindcss-animated";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
    keyframes: {
      divAppear: {
        "0%": { opacity: 0, width: "0%" },
        "100%": { opacity: 1, width: "100%" },
      },
      imgZigzagDisappear: {
        "0%": { opacity: 1, transform: "translate(0, 0)" },
        "25%": { transform: "translate(20px, -20px)" },
        "50%": { transform: "translate(-20px, -40px)" },
        "75%": { transform: "translate(20px, -60px)" },
        "100%": { opacity: 0, transform: "translate(0, -80px)" },
      },
      imgSwingDisappear: {
        "0%": { opacity: 1, transform: "translate(0, 0) rotate(0deg)" },
        "20%": { transform: "translate(-10px, -10px) rotate(-10deg)" },
        "40%": { transform: "translate(10px, -20px) rotate(10deg)" },
        "60%": { transform: "translate(-10px, -30px) rotate(-10deg)" },
        "80%": { transform: "translate(10px, -40px) rotate(10deg)" },
        "100%": { opacity: 0, transform: "translate(0, -50px) rotate(0deg)" },
      },
    },
    animation: {
      divAppear: "divAppear 1s ease-out",
      imgZigzagDisappear: "imgZigzagDisappear 3s ease-in-out forwards",
      imgSwingDisappear: "imgSwingDisappear 3s ease-in-out forwards",
    },
  },

  plugins: [daisyui, tailwindcssAnimated],
  daisyui: {
    themes: ["cupcake"],
  },
};
