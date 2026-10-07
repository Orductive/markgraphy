/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Anton', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'display': ['"Instrument Serif"', 'serif'],
        'mono-accent': ['"Space Mono"', 'monospace'],
      },
      colors: {
        'rust': '#B7410E',
      },
    },
  },
  plugins: [],
}
