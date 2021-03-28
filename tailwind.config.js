module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial', 'sans-serif'],
    },
    fontSize: {
      sm: '13px',
      base: '15px',
      lg: '20px',
    },
    fontWeight: {
      regular: 400,
      bold: 700,
      xbold: 800,
    },
    lineHeight: {
      sm: '16px',
      base: '20px',
      lg: '24px',
    },
    screens: {
      sm: '500px',
      md: '1005px',
      lg: '1281px',
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      blue: '#1da1f2',
      'blue-dark': '#1a91da',
      text: {
        primary: '#0f1419',
        secondary: '#5b7083',
      },
      gray: {
        dark: '#5b7083',
        mid: '#ebeef0',
        light: '#f7f9fa',
      },
      dim: {
        text: {
          primary: '#fffff',
          secondary: '#8899a6',
        },
        primary: {
          dark: '#15202b',
          mid: '#192734',
          light: '#253341',
          xlight: '#38444d',
        },
      },
      hover: {
        blue: 'rgba(29, 161, 242, 0.1)',
        gray: 'rgba(0, 0, 0, 0.03)',
        rt: 'rgba(23, 191, 99, 0.1)',
        like: 'rgba(224, 36, 94, 0.1)',
      },
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    extend: {
      spacing: {
        17: '4.5rem',
      },
      gridTemplateColumns: {
        'layout-sm': '70px 1fr',
        'layout-md': '70px 600px 280px',
        'layout-lg': '263px 600px 393px',
      },
      gridTemplateRows: {
        'layout-inner-xs': '53px 1fr 53px',
        'layout-inner-sm': '53px 118px 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
