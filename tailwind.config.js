/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: '#D30000', // Rojo vibrante como color principal (60%)
        secundario: '#F5F5F0', // Blanco hueso como color secundario (30%)
        acento: '#2E2E2E', // Negro como color de acento (10%)
        texto1: '#333333',
        'texto-claro': '#FFFFFF',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
