module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./**/*.html', './**/*.jsx', './**/*.tsx'],
    safelist: [
      'w-2/4', 'w-3/5', 'w-2/6', 'w-3/12', 'w-2/12', 'w-1/12' // 添加你想保留的类
    ],
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