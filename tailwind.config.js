// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,vue,js}", // ✅ Scan all HTML, Vue, and JS files in /src
  ],
  theme: {
    extend: {},
    screens: {
      'xs': { 'max': '639px' }, // 0 - 639px
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [],
};
