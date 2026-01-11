// scripts/init-tailwind.js
import { writeFileSync } from 'fs';

const tailwindConfig = `export default {
  content: [
    "./.vitepress/**/*.{vue,js,ts,jsx,tsx,md}",
    "./**/*.md",
    "./*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        }
      },
    }
  },
  plugins: []
}
`;

const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
`;

writeFileSync('tailwind.config.js', tailwindConfig);
writeFileSync('postcss.config.js', postcssConfig);

console.log('✅ Tailwind CSS 配置文件已创建');