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
        // Supply chain themed colors
        supply: {
          primary: '#1A5276',    // Deep blue - primary brand color
          secondary: '#2E86C1',  // Medium blue - secondary brand color
          accent: '#3498DB',     // Light blue - accent color
          highlight: '#21618C',  // Highlight blue
          success: '#27AE60',    // Green for positive metrics
          warning: '#F39C12',    // Amber for caution/warning
          danger: '#C0392B',     // Red for critical issues
          light: '#ECF0F1',      // Light background
          dark: '#2C3E50',       // Dark text/background
          gray: '#7F8C8D',       // Neutral gray
          lightgray: '#D6DBDF',  // Light gray for borders
          chart1: '#2471A3',     // Chart color 1
          chart2: '#148F77',     // Chart color 2
          chart3: '#D4AC0D',     // Chart color 3
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
        'bounce-slow': 'bounce 3s infinite',
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
      },
    },
  },
  plugins: [],
} 