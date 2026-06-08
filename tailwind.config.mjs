/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#050708",
        "ink-soft": "#0A1013",
        "ink-panel": "#0F171B",
        "ink-lift": "#142126",
        cyan: "#37F5E7",
        ember: "#F43F46",
        bone: "#F2FAFA",
        smoke: "#9EB2B4",
      },
      fontFamily: {
        sans: ['"Onest Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 60px rgba(55, 245, 231, 0.18)",
        ember: "0 0 70px rgba(244, 63, 70, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "panel-scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "slow-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        "panel-scan": "panel-scan 5s linear infinite",
        "slow-float": "slow-float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
