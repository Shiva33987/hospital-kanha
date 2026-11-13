/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          navy: '#081F3D',
          navyDeep: '#041021',
          navyLight: '#0E2E59',
          blue: '#0284C7',
          sky: '#0EA5E9',
          cyan: '#06B6D4',
          accent: '#00A8E8',
          teal: '#0D9488',
          emerald: '#059669',
          emergency: '#DC2626',
          emergencyDark: '#991B1B',
          softBg: '#F8FAFC',
          cardBg: '#FFFFFF',
          borderSubtle: '#E2E8F0',
          textMuted: '#64748B',
          textDark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Figtree', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Figtree', 'system-ui', 'sans-serif'],
        condensed: ['"Plus Jakarta Sans"', 'Figtree', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(8, 31, 61, 0.06)',
        'hover': '0 20px 35px -8px rgba(8, 31, 61, 0.12)',
        'card': '0 2px 12px 0 rgba(8, 31, 61, 0.05)',
        'dropdown': '0 20px 40px -15px rgba(4, 16, 33, 0.2)',
        'glow': '0 0 25px rgba(2, 132, 199, 0.35)',
        'emergency': '0 0 20px rgba(220, 38, 38, 0.35)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
