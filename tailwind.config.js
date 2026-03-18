/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:      '#0D0D0D',
        'ink-soft':'#1A1A1A',
        cream:    '#F5EFE6',
        'cream-dk':'#EDE4D7',
        gold:     '#C9A96E',
        'gold-lt':'#E8D5B0',
        muted:    '#7A746C',
        surface:  '#FDFAF6',
      },
      fontFamily: {
        display: ['Cormorant Garant', 'Georgia', 'serif'],
        body:    ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
