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
        brick: "#C4531A",
        "brick-ink": "#A04313",
        ochre: "#EEC71C",
        sage: "#008B95",
        harbor: "#054676",
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
