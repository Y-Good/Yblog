/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'sans': ['Roboto Mono', 'sans-serif', 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            'mono': ['Roboto Mono', 'monospace'],
        }
    },
    plugins: [],
}

