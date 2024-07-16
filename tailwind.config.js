/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'read': '#ff1320',

        'white': '#ffff',
        'black': '#0000',

        

        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      }, 
    },
  },
  plugins: [],
}

