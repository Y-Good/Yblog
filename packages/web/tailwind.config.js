/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#0969da",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            table: {
              width: "auto",
            },
            code: {
              fontWeight: "400",
              backgroundColor: "rgba(175,184,193,0.2)",
              borderRadius: "6px",
              fontSize: "inherit",
              padding: "0 0.2em",
              "&::before": {
                display: "none",
              },
              "&::after": {
                display: "none",
              },
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
            p: {
              code: {
                padding: "0.2em 0.4em",
              },
            },
            pre: {
              // padding: "0",
              // margin:"0",
              div:{
                padding: "0 !important",
                margin: "0 !important",
              },
              code: {
                whiteSpace: "break-spaces !important",
              },
            },
          },
        },
      },
    },
    fontFamily: {
      sans: [
        "Roboto Mono",
        "sans-serif",
        "PingFang SC",
        "Microsoft YaHei",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
