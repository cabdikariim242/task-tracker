// tailwind.config.js
export const content = [
  "./src/**/*.{html,vue,js}", // ✅ Scan all HTML, Vue, and JS files in /src
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ['Montserrat', 'sans-serif']
    }
  },

  screens: {
    'xs': { 'max': '639px' }, // 0 - 639px
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px'
  },
};
export const plugins = [];
