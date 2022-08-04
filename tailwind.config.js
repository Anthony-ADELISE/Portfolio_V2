/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: "Orbitron, sans-serif",
      secondary: "Inter, sans-serif",
      grotesk: "Space Grotesk , sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        body: "#010208",
        white: "#fff",
        pink: "pink",
        transparent: "transparent",
        shadow: "hsla(38, 21%, 19%, .16)",
        whiteshadow: "hsla(0, 100%, 100%, 0.48)",
        footer: "rgba(185, 54, 245, 0.3)",
      },
      boxShadow: {
        primary: "0px 4px 40px rgba(0, 0, 0, 0.03)",
        shadowicon: "4px 5px 4px 3px rgba(89, 4, 168, 0.137)",
      },
      backgroundImage: {
        radialBgCircle: "url('/src/assets/img/radial-bg.svg')",
        videoBg: "url('/src/assets/img/video-bg.png')",
        circle: "url('/src/assets/img/circle.png')",
        explore: "url('/src/assets/img/explore.png')",
      },
    },
  },
  plugins: [],
};
