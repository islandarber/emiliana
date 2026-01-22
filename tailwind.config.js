/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
      },
      colors: {
        "darkbrownish": "#BD9E89",
        "greyblueish": "#CED1D4",
        "beigewhitish": "#faede0",
        "darkgreyblueish": "#545454",
        "greywhitish": "#f1ece5",
        "brownish": "#e4c9b2"
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
