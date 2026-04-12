/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './admin.html', './js/**/*.js'],
  theme: {
    extend: {
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'data-flow-x': 'data-flow-x 2s linear infinite',
        'data-flow-up': 'data-flow-up 1.5s linear infinite',
        'data-flow-down': 'data-flow-down 1.5s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(249, 115, 22, 0)' },
        },
        'data-flow-x': {
          '0%': { left: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
        'data-flow-up': {
          '0%': { bottom: '0%', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { bottom: '100%', opacity: '0' },
        },
        'data-flow-down': {
          '0%': { top: '0%', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
