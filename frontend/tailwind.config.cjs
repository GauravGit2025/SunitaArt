/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-ivory': '#FDFBF7',
        'luxury-bone': '#F5F5EC',
        'luxury-sand': '#E6DCC8',
        'luxury-beige': '#D1C2A5',
        'luxury-taupe': '#B4A28B',
        'luxury-brown': '#6B5744',
        'luxury-olive': '#5A6348',
        'luxury-navy': '#2C3A47',
        'luxury-gold': '#C5A665',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
