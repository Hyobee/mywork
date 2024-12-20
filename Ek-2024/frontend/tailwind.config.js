const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "src/**/*.{vue,js,ts,jsx,tsx}",
        "pages/**/*.{vue,js,ts,jsx,tsx}",
    ],
    // darkMode: false, on TailwindCss v3.0 dark mode is default setting, no false option, only class availiable
    theme: {
        extend: {
            fontFamily: {
                sans: ["Pretendard Variable", ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
                maxWidth: {
                    DEFAULT: "1400px",
                },
            },
            screens: {
                xs: "100%",
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1024px",
                "2xl": "1320px",
                "3xl": "1320px",
                "4xl": "1400px",
            },
            fontSize: {
                "2xs": ["0.75rem"], // ------ 12px
                xs: ["0.813rem"], // ------ 13px
                sm: ["0.875rem"], // ------ 14px
                base: ["1rem"], // -------- 16px
                lg: ["1.25rem"], // ------- 20px
                xl: ["1.375rem"], // -------- 22px
                "2xl": ["1.5rem"], // ---- 24px
                "3xl": ["1.875rem"], // ---- 30px
                "4xl": ["2.375rem"], // ---- 38px
                "5xl": ["2.75rem"], // ---- 44px
                "6xl": ["3.125rem"], // ---- 50px
                "7xl": ["3.375rem"], // ---- 54px
                "8xl": ["3.75rem"], // ---- 60px
                "9xl": ["4.688rem"], // ---- 75px
            },
            colors: {
                transparent: "transparent",
                maingreen: "#2eb804",
                mainblue: "#00a2ff",
                mainyorange: "#ff8a00",
                bggray: "#f5f7f7",

                primary: "#1774D0",
                secondary: "#73C108",
                orange: {
                    50: "#FF7F22",
                    DEFAULT: "#FF6029",
                },
                yellow: {
                    50: "#FFD368",
                    DEFAULT: "#FFB400",
                },
            },
        },
    },
    plugins: [
        require("daisyui"),

        // https://github.com/tailwindlabs/tailwindcss/issues/1102
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    //maxWidth: "1200px",
                    // "@screen sm": {
                    //     maxWidth: "600px",
                    // },
                    // "@screen md": {
                    //     maxWidth: "700px",
                    // },
                    // "@screen lg": {
                    //     maxWidth: "800px",
                    // },
                    // "@screen xl": {
                    //     maxWidth: "900px",
                    // },
                },
            });
        },
    ],

    daisyui: {
        darkTheme: false,
    },
};
