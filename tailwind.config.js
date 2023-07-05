/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cyan': 'hsl(180, 66%, 49%)',
      'dark-violet': 'hsl(257, 27%, 26%)',
      'red': 'hsl(0, 87%, 67%)',
      'gray': 'hsl(0, 0%, 75%)',
      'light-gray': '#f3f4f6',
      'grayish-violet': 'hsl(257, 7%, 63%)',
      'dark-blue': 'hsl(255, 11%, 22%)',
      'dark-violet': 'hsl(260, 8%, 14%)',
      'white': '#ffffff',
      'black': '#000000'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    lineHeight: {
      '12': '3.9rem'
    },
    backgroundImage: {
      'shorten': 'url(./assets/bg-shorten-desktop.svg)',
      'sm-shorten': 'url(./assets/bg-shorten-mobile.svg)',
      'boost': 'url(./assets/bg-boost-desktop.svg)',
      'sm-boost': 'url(./assets/bg-boost-mobile.svg)',
    },
    screens: {
      'xl': '1280px',
      'lg': '1024px',
      'md': '830px',
      'sm': '640px',
      'xs': '480px'
    }
  },
  plugins: [],
}
