/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./views/**/*.ejs", // ✅ THÊM DÒNG NÀY VÀO,
    "./public/**/*.{html,js}", // Quét tất cả file .html và .js trong thư mục public
    "./node_modules/flowbite/**/*.js" // Cần thiết để Flowbite hoạt động
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Heading sizes - SEO optimized and responsive
        'h1': ['2rem', { lineHeight: '1.2' }],     // 32px - Main title
        'h2': ['1.75rem', { lineHeight: '1.3' }],  // 28px
        'h3': ['1.5rem', { lineHeight: '1.3' }],   // 24px
        'h4': ['1.25rem', { lineHeight: '1.4' }],  // 20px
        'h5': ['1.125rem', { lineHeight: '1.4' }], // 18px
        'h6': ['1rem', { lineHeight: '1.5' }],     // 16px
        // Body text sizes
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body': ['1rem', { lineHeight: '1.6' }],        // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.5' }],  // 12px
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-right))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // Thêm plugin của Flowbite
  ],
}