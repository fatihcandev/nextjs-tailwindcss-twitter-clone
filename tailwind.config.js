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
      white: '#ffffff',
      blue: '#1a91da',
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
        primary: 'rgba(29, 161, 242, 0.1)',
        gray: 'rgba(0, 0, 0, 0.03)',
        rt: 'rgba(23, 191, 99, 0.1)',
        like: 'rgba(224, 36, 94, 0.1)',
      },
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    extend: {
      gridTemplateColumns: {
        sm: '70px 1fr',
        md: '70px 1fr 28.85%',
        lg: '21.46% 1fr 27.32%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
