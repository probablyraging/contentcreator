/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#00040f",
                secondary: "#1b94b5",
                dimWhite: "rgba(255, 255, 255, 0.7)",
                dimBlue: "rgba(9, 151, 124, 0.1)",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
        screens: {
            // xs: "480px",
            // ss: "620px",
            // sm: "768px",
            // md: "1060px",
            // lg: "1200px",
            'xs': { 'max': '480px' },
            'ss': { 'max': '640px' },
            'sm': { 'max': '768px' },
            'md': { 'max': '1024px' },
            'lg': { 'max': '1280px' },
            'xl': { 'max': '1536px' },
            xxl: "1700px",
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
};