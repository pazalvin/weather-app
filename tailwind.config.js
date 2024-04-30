/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens:{
      mobile: '425px',
      // => @media (min-width: 425px) { ... }
      '2xs': ' 300px',
      // => @media (min-width: 300px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      laptop: '992px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      standard: '1440px',
      // => @media (min-width: 1440px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '18k': '1800px',
      // => @media (min-width: 1800px) { ... }
      '2k': '2000px',
      // => @media (min-width: 2000px) { ... }
    }
  },
  plugins: [],
}

