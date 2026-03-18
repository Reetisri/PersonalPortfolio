/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0f',
          925: '#0d0d1a',
        },
        glow: '#8B5CF6',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(139, 92, 246, 0.15)',
        glow: '0 0 40px rgba(139, 92, 246, 0.5)',
      },
      keyframes: {
        'conic-spin': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'conic-spin': 'conic-spin 4s linear infinite',
      },
    },
  },
  plugins: [],
}

