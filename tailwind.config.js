export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "200px",
      sm: "480px",
      ms: "768px",
      md: "850px",
      lg: "1000px",
      xl: "1200px",
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
      animation: {
        smoothMove: 'move 3s infinite alternate',
        smoothMoveMB: 'moveMB 2s infinite alternate',
        underlineMove: 'underline 2s'
      },
      keyframes: {
        move: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(20px)'},
        },
        moveMB: {
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(20px)'}
        }
      }
    },
  },
  plugins: [],
};