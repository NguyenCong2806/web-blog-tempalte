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
    },
  },
  plugins: [
    require('flowbite/plugin') // Thêm plugin của Flowbite
  ],
}