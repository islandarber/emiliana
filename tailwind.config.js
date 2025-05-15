/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#f5e6e0',
          200: '#ebc8bc',
          300: '#c88866',
          400: '#c1886b',
          500: '#cb8885',
        },
        secondary: {
          100: '#e6eded',
          200: '#ccdada',
          300: '#2a4f50',
          400: '#1f3b3c',
          500: '#152829',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};