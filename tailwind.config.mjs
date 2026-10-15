/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E2430",
        slate: "#4A5363",
        paper: "#F7F4EE",
        line: "#E3DDD2",
        brick: "#B8472A",
        "brick-ink": "#8F3520",
        ochre: "#E3B24F",
        sage: "#7E9C86",
        harbor: "#2E5A78",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
