/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        itera: {
          gold: '#FFD700',
          red: '#991B1B',
          bg: '#050508',
          card: '#0f0f15',
          cardHover: '#161622',
          accent: '#6366f1',
          accentSecondary: '#14b8a6',
          textPrimary: '#f4f4f5',
          textMuted: '#a1a1aa',
          border: '#1f1f2e'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(99, 102, 241, 0.18)',
      },
      backgroundImage: {
        'glass-gradient': 'radial-gradient(circle at top left, rgba(99,102,241,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(20,184,166,0.15), transparent 30%)'
      },
      keyframes: {
        'pulse-glow': {
          '0%': { transform: 'scale(1) translate(0px, 0px)' },
          '100%': { transform: 'scale(1.2) translate(20px, -20px)' }
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 8s infinite alternate'
      }
    }
  },
  plugins: [],
};
