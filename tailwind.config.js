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
        "head-1": ["24px", { fontWeight: 700, letterSpacing: "0.333px" }],
        "head-2": ["20px", { fontWeight: 600, letterSpacing: "0.25px" }],
        "head-3": ["18px", { fontWeight: 700, letterSpacing: "-0.25px" }],
        "head-4": ["14px", { fontWeight: 500, letterSpacing: "0.194px" }],
        "body-2": ["15px", "22px"],
        "body-3": [
          "13px",
          {
            lineHeight: "19px",
            fontWeight: 600,
          },
        ],
      },
      boxShadow: {
        "3xl": "0px 10px 40px -7px rgba(55, 63, 104, 0.35)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
