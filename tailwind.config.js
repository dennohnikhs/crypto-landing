/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       "lp-black":"#1b1c21"
      },
      screens: {
        mobile: "375px",
        "mobile-m": "425px",
        "mobile-l": "768px",
        tablet: "1024px",
        laptop: "1440px",
        "laptop-l": "1680px",
        "laptop-xl": "1920px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      aushan: ["Kaushan Script", "cursive"],
    },
    },
  
  plugins: [],
};
