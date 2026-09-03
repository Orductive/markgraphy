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
        'lazy-dark': ['"Lazy Dark Demo"', 'cursive'],
        'neulis': ['"Neulis Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
