/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(20, 45%, 93%)',
          200: 'hsl(20, 40%, 88%)',
          300: 'hsl(20, 35%, 83%)',
          400: 'hsl(20, 30%, 76%)',
          500: 'hsl(20, 25%, 67%)',
          600: 'hsl(20, 20%, 54%)',
          700: 'hsl(20, 18%, 50%)',
          800: 'hsl(20, 15%, 43%)',
          900: 'hsl(20, 12%, 22%)',
          950: 'hsl(20, 10%, 12%)'
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
  ],
}