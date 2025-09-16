/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#FF6B35',
        'orange-dark': '#E55A2B',
        'orange-light': '#FF8A65',
        'gray-dark': '#2D3748',
        'gray-medium': '#4A5568',
        'gray-light': '#718096',
        'yellow-accent': '#FFD700',
        'green-positive': '#48BB78',
        'red-negative': '#F56565',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
