/**
 * @type {import("tailwindcss/defaultConfig")}
 */

module.exports = {
    content: ["./app/**/*.tsx"],
    darkMode: "class",
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "2rem",
                    sm: "4rem",
                    lg: "6rem",
                    xl: "6rem",
                    "2xl": "10rem",
                },
            },
        },
        fontFamily: {
            sans: ["Nunito"],
            serif: ["Nunito"],
            mono: ["Nunito"],
            display: ["Nunito"],
            body: ["Nunito"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
