/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
      },
      colors: {
        background: "#b0a7a2",   // soft taupe
        section: "#b1a899",      // muted warm beige
        heading: "#a59888",      // medium warm brown
        subheading: "#a09581",   // slightly darker taupe
        text: "#997f6e",         // deep warm brown
        button: "#a09581",       // primary buttons
        accent: "#b1a899",       // accents, borders, hover
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
