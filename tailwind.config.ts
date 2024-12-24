import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        background: '#000000',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
    }
  },

  plugins: []
} satisfies Config;
