const plugin = require("tailwindcss/plugin");

module.exports = {
  // File paths where Tailwind will be used
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // 1. Colors
      colors: {
        primary: "#FFD700", // Gold for highlights
        secondary: "#4B0082", // Indigo for depth
        accent: "#FFA500", // Orange for warmth
        neutral: "#2D3748", // Grayish blue
        dark: "#1A202C", // Deep background
        light: "#F7FAFC", // Light background
        cinematic: "#1B263B", // Dark blue cinematic tone
        magic: "#D4AF37", // Magic-inspired gold
      },

      // 2. Typography
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Global font
        serif: ["Playfair Display", "serif"], // Fairy-tale headings
        mono: ["Fira Code", "monospace"], // For code snippets
      },

      // 3. Spacing
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
        160: "40rem", // Extended spacing for larger sections
      },

      // 4. Box Shadows
      boxShadow: {
        glow: "0 4px 15px rgba(255, 215, 0, 0.6)", // Gold glow
        strong: "0 10px 20px rgba(0, 0, 0, 0.3)", // Strong shadow for cards
        subtle: "0 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow
        cinematic: "0 5px 25px rgba(27, 38, 59, 0.7)", // Cinematic shadow
      },

      // 5. Gradients
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #1A202C, #2D3748, #4B0082)", // Hero section
        "storybook-gradient": "radial-gradient(circle, #FFD700, #4B0082, #1A202C)", // Storybook background
        "cinematic-gradient": "linear-gradient(to bottom, #1B263B, #1A202C)", // Cinematic depth
      },

      // 6. Animations
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.8s ease-out",
        spotlight: "spotlight 2s infinite",
        pageFlip: "pageFlip 1s ease-in-out",
      },

      // 7. Keyframes
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        spotlight: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 255, 255, 0.6)" },
        },
        pageFlip: {
          "0%": { transform: "rotateY(-90deg)", opacity: 0 },
          "50%": { transform: "rotateY(-45deg)", opacity: 0.5 },
          "100%": { transform: "rotateY(0)", opacity: 1 },
        },
      },

      // 8. Breakpoints
      screens: {
        xs: "480px", // Extra small screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Advanced text utilities
    require("@tailwindcss/forms"), // Better form styling
    require("@tailwindcss/aspect-ratio"), // Aspect ratio utilities
    require("@tailwindcss/line-clamp"), // Line clamping for truncating text
    plugin(function ({ addUtilities }) {
      // Custom utility for hover glow effects
      addUtilities({
        ".hover-glow": {
          transition: "all 0.3s ease-in-out",
          boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)",
        },
        ".hover-glow:hover": {
          boxShadow: "0 0 25px rgba(255, 215, 0, 0.8)",
        },
      });

      // Custom utility for text shadow
      addUtilities({
        ".text-glow": {
          textShadow: "0 2px 8px rgba(255, 255, 255, 0.6)",
        },
        ".text-cinematic": {
          textShadow: "0 4px 12px rgba(27, 38, 59, 0.8)",
        },
      });
    }),
  ],
};
