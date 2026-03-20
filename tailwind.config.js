/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090E1A',
        slate: '#101827',
        glass: 'rgba(255,255,255,0.06)',
        electric: '#3B82F6',
        neon: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      boxShadow: {
        glow: '0 12px 40px rgba(59,130,246,0.22)',
        soft: '0 8px 24px rgba(9,14,26,0.35)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 10% 10%, rgba(59,130,246,0.2), transparent 35%), radial-gradient(circle at 90% 15%, rgba(34,197,94,0.15), transparent 30%), radial-gradient(circle at 50% 90%, rgba(245,158,11,0.12), transparent 40%)',
      },
    },
  },
  plugins: [],
}

