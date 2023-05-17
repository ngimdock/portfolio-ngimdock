/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },

      colors: ({ colors }) => ({
        // primary: "#39A78D",
        // primary: "#0098cc",
        primary: "#C03247",
        "primary-dark": "#08638b",
        dark: "#121212",
        "dark-2": "#2B2B2B",
        "dark-3": "#171717",
        light: "#D1D5DB",
        "light-dark": "#A5A6A6",
      }),

      fontFamily: {
        Inter: ['"Inter"', "sans-serif"],
      },

      // backgroundImage: {
      //   "card-bg": "url(/assets/images/images.jpeg)",
      // },
    },
  },
  plugins: [],
};
