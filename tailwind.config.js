/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        glass: 'rgba(255,255,255,0.05)',
        border: 'rgba(255,255,255,0.1)',
        text: '#ffffff',
        muted: '#a1a1a1',
      },
      boxShadow: {
        glass: '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18)',
        glow: '0 0 24px rgba(255,255,255,0.16)',
      },
      backdropBlur: {
        xl: '24px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
