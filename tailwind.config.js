/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jsx,js}",
    "./components/**/*.{jsx,js}",
    "./node_modules/flowbite-react/**/*.js",
  ], // The glob patterns to use for source files
  theme: {
    extend: {
      colors: {
        // navItems: "#8F8C86",
        navItems: "ffffff",
        mainFucsia: "#E02076",
      },
      fontFamily: {
        KumbhSans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
