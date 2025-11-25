/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff0f6',
          100: '#ffd6e8',
          200: '#ffb3d1',
          400: '#ff66aa',
          600: '#e91e63',
          800: '#880e4f',
          900: '#4a0030',
        },
      },
    },
  },
  plugins: [],
}


