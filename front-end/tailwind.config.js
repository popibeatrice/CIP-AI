module.exports = {
    content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "media",
    theme: {
        screens: {
            xxs: "365px",
            xs: "500px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1700px",
        },
        extend: {
            colors: {
                'baby_blue': "#5aa6be",
            },
            fontFamily: {
                assistant: ['"Assistant"', "'sans-serif'"],
                rajdhani: ['"Rajdhani"', "'sans-serif'"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
