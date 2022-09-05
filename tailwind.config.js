module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./**/*.html', './**/*.jsx', './**/*.tsx'],
  },
  theme: {
    extend: {
      fontFamily: {
        'gotham-book': ['Gotham-Book']
      },
      screens: {
        // 普通手机屏幕，用于识别超小尺寸手机
        normal: '330px',
        print: { 'raw': 'print' },
      }
    }
  }
};