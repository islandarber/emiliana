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
          100: '#F5F3E7', // cream
          200: '#E3B9A6', // dusty rose
          300: '#D6A77A', // terracotta
          400: '#C28B63', // clay
          500: '#64724D', // earthy green
        },
        secondary: {
          100: '#E6F0F1', // light muted teal
          200: '#BFD3D6', // soft teal
          300: '#7C9A9E', // stronger teal
          400: '#A3988E', // warm gray
          500: '#8B827B', // darker gray
        },
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
