/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'resume-blue': '#4A90E2',
        'resume-dark-blue': '#2C5599',
        'resume-light-blue': '#87CEEB',
        'resume-bg': '#E8F4FD',
      },
      fontFamily: {
        'title': ['Poppins', 'Source Sans Pro', 'sans-serif'],
        'content': ['Source Sans Pro', 'Poppins', 'sans-serif'],
        'sans': ['Poppins', 'Source Sans Pro', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        'word': '0.1em',
        'letter': '0.01em',
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.5' }],
        'sm': ['1rem', { lineHeight: '1.6' }],
        'base': ['1.125rem', { lineHeight: '1.6' }],
        'lg': ['1.25rem', { lineHeight: '1.6' }],
        'xl': ['1.5rem', { lineHeight: '1.6' }],
        '2xl': ['2rem', { lineHeight: '1.4' }],
        '3xl': ['2.5rem', { lineHeight: '1.3' }],
        '4xl': ['3rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}

