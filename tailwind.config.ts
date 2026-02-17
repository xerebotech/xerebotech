import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FE7700', // Matches user request
          muted: '#FFB366',
          light: '#FFF4E6',
        },
        dark: {
          DEFAULT: '#323939', // Updated to match user request
          deepest: '#202727', // Updated to match user request
        },
        light: '#F6F4F4', // Matches user request
        warmGray: {
          200: '#E0DCDA',
          300: '#C7C2BF',
          500: '#8A8380',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-space-grotesk)', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
