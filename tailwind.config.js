module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fillLeft: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        fillLeft: 'fillLeft 1s ease-in forwards',
        fadeOut: 'fadeOut 1s ease-in forwards',
      }
    },
  },
}
