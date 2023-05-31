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
                textAlt: "#3694ff"
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                resourceShadow: '2px 2px 20px 0px #0000001c',
                lgBoxLight: '0px 0px 100px 1px #ffffff14 !important',
                lgBoxDark: '0 0 100px 1px #00000024 !important',
            },
            dropShadow: {
                cardShadowSm: '0 12px 14px rgb(104 112 118 / 0.2)',
                cardShadowLg: '0 25px 34px rgb(104 112 118 / 0.35)',
                cardShadowSmDark: '0 12px 14px rgb(0 0 0 / 0.3)',
                cardShadowLgDark: '0 12px 14px rgb(0 0 0 / 0.35)'
            }
        },
        screens: {
            xsup: "480px",
            ssup: "620px",
            smup: "768px",
            mdup: "1060px",
            lgup: "1200px",
            xxlup: "1700px",
            xs: { 'max': '480px' },
            ss: { 'max': '640px' },
            sm: { 'max': '768px' },
            md: { 'max': '1024px' },
            lg: { 'max': '1280px' },
            xl: { 'max': '1536px' },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    important: true,
};