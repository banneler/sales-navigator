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
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
        'scale-in': 'scale-in 0.5s ease-out both',
        'celebrate-node':
          'celebrate-node 0.95s cubic-bezier(0.34, 1.45, 0.64, 1) both',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'celebrate-node': {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.35)',
          },
          '45%': {
            transform: 'scale(1.06)',
            boxShadow: '0 12px 40px -8px rgba(249, 115, 22, 0.45)',
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
          },
        },
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
