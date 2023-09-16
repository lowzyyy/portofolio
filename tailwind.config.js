/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '450px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans Variable', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        slideFromLeft: {
          '0%': { transform: 'translateX(-10px)', opacity: '0.1' },
          '100%': { transform: 'translateX(0%)', opacity: '0.7' }
        },
        slideFromRight: {
          '0%': { transform: 'translateX(10px)', opacity: '0.1' },
          '100%': { transform: 'translateX(0%)', opacity: '0.7' }
        },
        slideUp: {
          '0%': { transform: 'translateY(5%)', opacity: '0.1' },
          '100%': { transform: 'translateY(0%)', opacity: '0.5' }
        }
      },
      animation: {
        slideUp: 'slideUp 0.3s ',
        slideFromLeft: 'slideFromLeft 0.6s ease-out',
        slideFromRight: 'slideFromRight 0.6s ease-out '
      }
    }
  },
  plugins: []
}
