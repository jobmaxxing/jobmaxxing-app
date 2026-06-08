/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#3B82F6',
        'electric-blue-light': '#60A5FA',
        'deep-purple': '#7C3AED',
        'purple-light': '#A78BFA',
        'neon-blue': '#06B6D4',
        'bg-primary': '#050508',
        'bg-secondary': '#0A0A12',
        'bg-card': '#0D0D1A',
        'bg-glass': 'rgba(255,255,255,0.04)',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'border-glow': 'rgba(99,102,241,0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.3), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(124,58,237,0.05))',
        'blue-purple': 'linear-gradient(135deg, #3B82F6, #7C3AED)',
        'purple-blue': 'linear-gradient(135deg, #7C3AED, #06B6D4)',
        'text-gradient': 'linear-gradient(135deg, #60A5FA, #A78BFA, #06B6D4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'orbit': 'orbit 15s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(99,102,241,0.8), 0 0 60px rgba(124,58,237,0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59,130,246,0.4)',
        'glow-purple': '0 0 30px rgba(124,58,237,0.4)',
        'glow-sm': '0 0 15px rgba(99,102,241,0.3)',
        'card': '0 4px 6px -1px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.3)',
        'card-hover': '0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(99,102,241,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
