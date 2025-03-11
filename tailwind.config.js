/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        comet: "comet 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        comet: {
          "0%": { transform: "translateX(0) translateY(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateX(100vw) translateY(100vh)",
            opacity: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      colors: {
        space: {
          black: "#050505",
          blue: {
            DEFAULT: "#0F172A",
            dark: "#020617",
          },
        },
      },
    },
  },
  plugins: [],
};
