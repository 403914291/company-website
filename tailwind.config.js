/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}',
    './**/*.md',
    './components/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
        600: 'var(--vp-c-brand)', // 直接引用VitePress变量
        700: 'var(--vp-c-brand-dark)',
        800: '#1e40af',
        900: 'var(--vp-c-brand-darker)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: []
}