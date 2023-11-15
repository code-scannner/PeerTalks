/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        chat:"rgba(0, 0, 0, 0.15) 1.5px 1.5px 2px",
      },
      colors: {
        primary: {
          '25': 'hsl(278, 100%, 99%)',
          '50': 'hsl(278, 100%, 98%)',
          '100': 'hsl(278, 100%, 95%)',
          '200': 'hsl(277, 100%, 91%)',
          '300': 'hsl(277, 100%, 84%)',
          '400': 'hsl(278, 100%, 74%)',
          '500': 'hsl(278, 100%, 64%)',
          '600': 'hsl(278, 94%, 56%)',
          '700': 'hsl(278, 83%, 47%)',
          '800': 'hsl(279, 77%, 39%)',
          '900': 'hsl(280, 75%, 32%)',
          '950': 'hsl(280, 100%, 25%)',
          '999': 'hsl(280, 100%, 10%)',
        },
      }
    },
  },
  plugins: [],
}
