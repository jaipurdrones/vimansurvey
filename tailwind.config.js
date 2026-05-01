/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },

    extend: {
      // 🎨 COLORS
      colors: {
        primary: {
          50: "#e6faff",
          100: "#ccf5ff",
          200: "#99ebff",
          300: "#66e1ff",
          400: "#33d7ff",
          500: "#10ccf2",
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
          400: "#b09b7e",
          500: "#9c8759",
          600: "#887346",
          700: "#745f38",
          800: "#604b2a",
          900: "#4c371d",
        },

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

        dark: {
          DEFAULT: "#191919",
          100: "#1f1f1f",
          200: "#141414",
          300: "#0a0a0a",
        },

        // ✅ Semantic colors (useful everywhere)
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        info: "#3b82f6",
      },

      // ✍️ TYPOGRAPHY
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.6rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1.2"],
        "6xl": ["3.75rem", "1.1"],
      },

      // 🟦 BORDER RADIUS
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      // 🌫 SHADOWS (premium feel)
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        card: "0 8px 30px rgba(0,0,0,0.08)",
        hover: "0 10px 40px rgba(0,0,0,0.12)",
      },

      // ✨ ANIMATIONS
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        slideUp: "slideUp 0.6s ease-out",
        float: "float 4s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      // 📏 SPACING (optional tweak)
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },

  plugins: [],
};