/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            a: {
              color: "#0969da",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            img: {
              display: "inline",
              marginTop: "0",
              marginBottom: "0",
            },
            table: {
              width: "auto",
            },
            code: {
              fontWeight: "600",
              // backgroundColor: "rgba(175,184,193,0.2)",
              // borderRadius: "6px",
              // fontSize: "inherit",
              // padding: "0 0.2em",
              // "&::before": {
              //   display: "none",
              // },
              // "&::after": {
              //   display: "none",
              // },
            },
            tbody: {
              td: {
                padding: "0.5rem 1rem",
                borderWidth: "1px",
              },
            },
            thead: {
              th: {
                backgroundColor: "#f5f5f5",
                padding: "0.5rem 1rem",
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                borderWidth: "1px",
              },
            },
            // p: {
            //   code: {
            //     padding: "0.2em 0.4em",
            //   },
            // },
            pre: {
              // padding: "0",
              // margin:"0",
              div: {
                padding: "0 !important",
                margin: "0 !important",
                backgroundColor: "transparent !important",
              },
              code: {
                whiteSpace: "break-spaces !important",
                backgroundColor: "transparent !important",
              },
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ["Roboto Mono", "PingFang SC", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    gridTemplateRows: {
      layout: "auto 1fr auto",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
