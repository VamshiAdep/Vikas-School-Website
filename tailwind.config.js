/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
    pacifico: ['"Pacifico"', 'cursive'],
  },

      animation: {
        'spin-slow': 'spin 2s linear infinite',
        marquee: 'marquee 20s linear infinite',
        blink: 'blink 1s step-end infinite',
        typewriter: 'typing 1.5s steps(20) 1 normal both, blink 0.75s step-end infinite',
      },
      keyframes: {
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        typing: {
          'from': { width: '0%' },
          'to': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
