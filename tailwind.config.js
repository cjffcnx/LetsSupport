/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6B9BD1',
                secondary: '#A8D5BA',
                accent: '#E8C4A2',
                calm: '#F0F4F8',
            },
        },
    },
    plugins: [],
}
