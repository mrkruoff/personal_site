/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mono palette - pure blacks and whites
        mono: {
          white: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
          black: '#000000',
        },
        // Gradient accent colors (pink to orange)
        accent: {
          pink: '#EC4899',
          rose: '#F43F5E',
          orange: '#F97316',
          yellow: '#FBBF24',
        },
        // Legacy primary mapping for compatibility
        primary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
        },
        // Dark backgrounds
        dark: {
          950: '#000000',
          900: '#0a0a0a',
          850: '#0f0f0f',
          800: '#141414',
          750: '#1a1a1a',
          700: '#1f1f1f',
          600: '#262626',
          500: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter var', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradientX 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #EC4899, #F43F5E, #F97316)',
        'gradient-accent-hover': 'linear-gradient(135deg, #F472B6, #FB7185, #FB923C)',
      },
    },
  },
  plugins: [],
}
