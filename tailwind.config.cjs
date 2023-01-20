/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#18191F",
        secondary: "#252B42",
        orange: "#F4511E",
        grey: "#818181",
        gray: "#BDBDBD",
        darkBlue: "#0A142F",
        offWhite: "#F5F5F5"
      },
      backgroundImage: {
        gradient1: "linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%)",
        gradient2: "linear-gradient(180deg, rgba(0, 0, 0, 0) 14.58%, rgba(56, 56, 56, 0.84) 100%)",
        hbg: "url('/assets/images/headerbg.png')"
      }


    },
  },
  plugins: [],
}
