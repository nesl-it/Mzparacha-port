import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC310',
        dark: {
          1: '#0F0F0F',
          2: '#171717',
        },
        secondary: '#000',
        tertiory: '#fff',
        darkgray: '#8D8D8D',
        graytext: '#555555',
        supporting: '#a8a8a8',
      },
    },
  },
  plugins: [],
};
export default config;
