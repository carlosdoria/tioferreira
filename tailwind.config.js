/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#009739',
          'green-dark': '#007a2e',
          'green-light': '#edf7f0',
          yellow: '#FEDD00',
          'yellow-dark': '#e5c800',
          dark: '#0a2714',
          muted: '#3a7050',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
