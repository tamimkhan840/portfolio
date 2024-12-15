/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor 0.6s infinite',
        typing: 'typing 20s steps(14) infinite',
        words: 'words 20s infinite',
      },
      keyframes: {
        cursor: {
          to: { borderLeftColor: 'var(--main-color)' },
        },
        words: {
          '0%, 20%': { content: "'Web Developer'" },
          '21%, 40%': { content: "'Web Designer'" },
          '41%, 60%': { content: "'Web Engineer'" },
          '61%, 80%': { content: "Mobile Apps" },
          '81%, 100%': { content: "Graphic Design" },
        },
        typing: {
          '10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': { width: '0' },
          '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': { width: 'calc(100% + 8px)' },
        },
      },
    },
  },
  plugins: [],
};
