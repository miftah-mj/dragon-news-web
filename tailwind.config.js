/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#D72050",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                unifrakturCook: ["UnifrakturCook", "cursive"],
            },
        },
    },
    plugins: [daisyui],
};
