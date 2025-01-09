/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        junge: ['Junge', 'serif'],
        jetBrains:["JetBrains Mono", 'serif'],
        Koulen:["Koulen", 'serif'],
        librebodoni :["Libre Bodoni", 'serif']
      },
      textStrokeWidth: {
        sm: "1px",
        md: "2px",
        lg: "4px",
      },
    },
    screens: {
      sm: '480px', // Customize breakpoint for small devices
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px transparent",
        },
        ".text-stroke-md": {
          "-webkit-text-stroke": "2px transparent",
        },
        ".text-stroke-lg": {
          "-webkit-text-stroke": "4px transparent",
        },
      });
    },
  ],
}

