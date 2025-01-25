/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2A5495',
          DEFAULT: '#1D4172',
          dark: '#15325A'
        },
        secondary: {
          light: '#FFE580',
          DEFAULT: '#FFDE59',
          dark: '#FFD426'
        },
        accent: {
          emerald: '#34D399',
          coral: '#FF6B6B',
          purple: '#8B5CF6',
          teal: '#2DD4BF'
        },
        coffee: {
          light: '#8B4513',
          DEFAULT: '#654321',
          dark: '#3B2506'
        },
        navy: {
          light: '#2A5495',
          DEFAULT: '#1D4172',
          dark: '#15325A'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
