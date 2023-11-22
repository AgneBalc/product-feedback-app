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
      blue: "#4661E6",
      darkBlue: "#373F68",
      white: "#FFFFFF",
      lightGray: "#F2F4FF",
      extraLightGray: "#F7F8FD",
      gray: "#3A4374",
      mediumGray: "#647196",
      orange: "#F49F85",
      skyBlue: "#62BCFA",
    },
    extend: {},
  },
  plugins: [],
};
