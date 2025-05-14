/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          white: '#f5f5f7',
          black: '#1d1d1f',
          gray: '#86868b',
          blue: '#0071e3',
          lightgray: '#e5e5e5',
          darkgray: '#424245',
        },
        // Modern masculine data analyst color palette
        supply: {
          primary: '#2563EB',    // Strong Blue - primary brand color
          secondary: '#1E40AF',  // Deep Blue - secondary brand color
          accent: '#3B82F6',     // Bright Blue - accent color
          highlight: '#0284C7',  // Teal Blue - highlight color
          success: '#10B981',    // Emerald - for positive metrics
          warning: '#F59E0B',    // Amber - for caution/warning
          danger: '#DC2626',     // Red - for critical issues
          light: '#F8FAFC',      // Light background
          dark: '#0F172A',       // Dark text/background
          gray: '#64748B',       // Slate gray
          lightgray: '#E2E8F0',  // Light gray for borders
          chart1: '#2563EB',     // Chart color 1 - blue
          chart2: '#0284C7',     // Chart color 2 - teal blue
          chart3: '#10B981',     // Chart color 3 - emerald
          chart4: '#1E40AF',     // Chart color 4 - deep blue
          chart5: '#3B82F6',     // Chart color 5 - bright blue
        },
        accent: {
          50: '#FFFFFF',   // White
          100: '#F4F4F4',  // Light Gray
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#333333',  // Dark Gray
          900: '#000000',  // Black
        },
        neutral: {
          50: '#FFFFFF',   // White
          100: '#F4F4F4',  // Light Gray
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#333333',  // Dark Gray
          900: '#000000',  // Black
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 10px 20px -2px rgba(0, 0, 0, 0.07)',
        'card': '0 0 20px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'spin-slow': 'spin 8s linear infinite',
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
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
} 