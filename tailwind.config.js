/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{jsx,js}", "./components/**/*.{jsx,js}"], // The glob patterns to use for source files
  theme: {
    extend: {
      colors: {
        navItems: "#8F8C86",
        mainFucsia: "#E02076",
      },
    },
  },
  plugins: [],
};
