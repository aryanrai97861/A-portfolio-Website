// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        neonGreen: '#39ff14',
        'cyber-blue': '#0ff',
        'cyber-pink': '#f0f',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        glitch: 'glitch 0.5s infinite',
      },
    },
  },
};
