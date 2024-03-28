/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37', // You can adjust the shade as needed
          300: '#f0e68c', // Lighter golden color for hover state
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        'onest': ['Onest', 'sans-serif'],
        'belanosima': ['Belanosima', 'sans-serif'],
        'afacad': ['Afacad', 'sans-serif'],
        'yatra-one': ['Yatra One', 'sans-serif'],
        'madimi-one': ['Madimi One', 'sans-serif'],
        'passion-one': ['Passion One', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

