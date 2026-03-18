/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:         '#FAF9F6',
        surface:    '#FFFFFF',
        border:     '#E8E6E1',
        forest:     '#2C3E38',
        muted:      '#7A8C86',
        accent:     '#D4A373',
        'accent-dk':'#B8875A',
        'green-lt': '#EFF4F2',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(36px,5.5vw,68px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(28px,3.5vw,46px)', { lineHeight: '1.2' }],
        'h3':      ['clamp(20px,2vw,26px)',   { lineHeight: '1.3' }],
        'lead':    ['clamp(16px,1.3vw,18px)', { lineHeight: '1.75' }],
      },
      spacing: {
        'section': 'clamp(64px,9vw,120px)',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(44,62,56,0.07)',
        'lift': '0 20px 50px rgba(44,62,56,0.12)',
        'cta':  '0 8px 24px rgba(212,163,115,0.35)',
      },
      borderRadius: {
        DEFAULT: '4px',
        'lg': '8px',
        'xl': '12px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenBurns: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.65s ease forwards',
        'fade-in':   'fadeIn 0.65s ease forwards',
        'ken-burns': 'kenBurns 8s ease-in-out infinite alternate',
        'shimmer':   'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
