/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Pixelify Sans'],
        'primary2': ['IBM Plex Mono'],
      },
      brightness: {
        80: '.8',
        60: '.6',
        70: '.7',
        175: '1.75',
      }
    },
  },
  plugins: [],
}

