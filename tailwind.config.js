/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url(/suggestions/desktop/background-header.png)",
        tablet: "url(/suggestions/tablet/background-header.png)",
        mobile: "url(/suggestions/mobile/background-header.png)",
      },
      colors: {
        purple: "#AD1FEA",
        white: "#FFFFFF",
        orange: "#F49F85",
        grayLightest: "#F7F8FD",
        grayLight: "#F2F4FF",
        gray: "#647196",
        grayDark: "#3A4374",
        blueLight: "#62BCFA",
        blue: "#4661E6",
        blueDark: "#373F68",
      },
      borderRadius: {
        sm: "5px",
        md: "10px",
      },
      fontSize: {
        // "body-1": "text-base",
        "body-2": ["15px", "22px"],
        "body-3": [
          "13px",
          {
            lineHeight: "19px",
            fontWeight: 600,
          },
        ],
      },
    },
  },
  plugins: [],
};
