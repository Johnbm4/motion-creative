/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        scene: '0.35em',
      },
      colors: {
        void: '#000000',
        mist: '#6b6b6b',
        whisper: '#3a3a3a',
      },
    },
  },
  plugins: [],
};
