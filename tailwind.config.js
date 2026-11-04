/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#368800',
          'green-secondary': '#90C31F',
          'green-hover': '#005200',
          'green-light': '#F0FDF4',
          'green-border': '#BBF7D0',
          text: '#1F2937',
          'text-muted': '#4B5563',
          bg: '#FFFFFF',
          section: '#F8FAFC',
          border: '#E5E7EB',
          dark: '#111827',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
