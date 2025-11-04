/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
      },
      colors: {
        text: "#9f8a7dff",         // deep warm brown
        button: "#2e9277ff",       // primary buttons
        "primary-100": "#c28b76",
        "primary-200": "#9A6349",
        "primary-300": "#0d5618ff",
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
