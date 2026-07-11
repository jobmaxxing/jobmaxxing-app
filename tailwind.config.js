/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F8F9FB',
        surface: '#FFFFFF',
        line: '#E5E7EB',
        ink: '#101828',
        muted: '#667085',
        accent: '#4F8EF7',
        'accent-soft': '#EAF2FE',
        success: '#16A34A',
        'success-soft': '#EAF7EE',
        danger: '#DC2626',
        'danger-soft': '#FCEAEA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)',
        'soft-hover': '0 4px 12px rgba(16,24,40,0.08)',
      },
    },
  },
  plugins: [],
}
