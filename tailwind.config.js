/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Palette
        primary: {
          50: "#e6faff",
          100: "#ccf5ff",
          200: "#99ebff",
          300: "#66e1ff",
          400: "#33d7ff",
          500: "#10ccf2", // 🌟 Main brand color (Viman blue)
          600: "#0eafd3",
          700: "#0c8fb0",
          800: "#096f8d",
          900: "#064f6a",
        },

        accent: {
          50: "#f6f1ea",
          100: "#ece3d5",
          200: "#d8c6ab",
          300: "#c4a981",
          400: "#b09b7e", // 🌟 Gold accent
          500: "#9c8759",
          600: "#887346",
          700: "#745f38",
          800: "#604b2a",
          900: "#4c371d",
        },

        dark: {
          DEFAULT: "#191919",
          100: "#1f1f1f",
          200: "#141414",
          300: "#0a0a0a",
        },

        // Neutral shades for backgrounds or text
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
    },
  },
  plugins: [],
};
