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
          navy: '#041b53',
          navyDeep: '#010d29',
          navyLight: '#00246a',
          royal: '#0052cc',
          blue: '#0052cc',
          sky: '#0284c7',
          cyan: '#06b6d4',
          accent: '#0284c7',
          teal: '#0d9488',
          emerald: '#059669',
          emergency: '#dc2626',
          emergencyDark: '#991b1b',
          softBg: '#f8faff',
          cardBg: '#ffffff',
          borderSubtle: '#e2e8f0',
          textMuted: '#64748b',
          textDark: '#0f172a',
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
