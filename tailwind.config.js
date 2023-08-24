export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "200px",
      sm: "360px",
      ms: "600px",
      md: "800px",
      lg: "900px",
      xl: "1280px",
      "2xl": "1536px",
    },
    prefix: "tw-",
    extend: {
      colors: {
        lightGray: "#5C5C5C",
      },

      boxShadow: {
        footerInputShadow: "0px 3.33333px 3.33333px rgba(0, 0, 0, 0.25)",
        navBtnShadow: "-1px 2px 5px 0px #f47d31",
      },
      borderRadius: {
        footerBorderR: "6px 0px 0px 6px",
      },
      fontFamily: {
        pFont:'Fira Sans , sans-serif',
        hFont:'Noto Sans , sans-serif'
      },
    },
  },
  plugins: [],
};