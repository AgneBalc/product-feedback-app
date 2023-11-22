/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "#AD1FEA",
      white: "#FFFFFF",
      orange: "#F49F85",
      gray: {
        100: "#F7F8FD",
        200: "#F2F4FF",
        300: "#647196",
        400: "#3A4374",
      },
      blue: {
        100: "#62BCFA",
        200: "#4661E6",
        300: "#373F68",
      },
    },
    extend: {},
  },
  plugins: [],
};
