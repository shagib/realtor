module.exports = {
  mode: 'jit',
  content: [
    "*.html",
  ],
  theme: {
    colors: {
      'primary': '#105446',
      'secondary': '#ACE17A',
      'white': '#FFFFFF',
      'white-20': 'rgba(255, 255, 255, 0.20)',
      'white-50': 'rgba(255, 255, 255, 0.50)',
      'white-100': '#D9D9D9',
      'black': '#1B1B1B',
      'black-10': 'rgba(0, 0, 0, 0.10)',
      'black-100': '#000000',
      'black-200': '#232323',
      'green': '#45C646',
      'blue': '#2B59FF',
      'yellow': '#FFD234',
      'red': '#FF698F',
      'pink': '#FFC6DE',
      'purple': '#C5D5FF',
      'light-gray': '#edf0f8',
      'gray': '#8D8D91',
      'gray-50': '#A8A8A8',
      'gray-100': '#AAAAAA',
      'gray-200': '#F1F1F1',
      'orange': '#FFDCCD',
      'cyan': '#DDEBFF',

    },
    fontFamily: {
      epilogue: ["Epilogue", 'sans-serif'],
    },
    fontSize: {
      '95px': ['5.938rem', {
        lineHeight: '6.531rem',
        letterSpacing: '-0.297rem'
      }],
      '64px': ['4rem', {
        lineHeight: '4.8rem',
        letterSpacing: '-0.2rem',
      }],
      '52px': ['3.25rem', {
        lineHeight: '4.225rem',
        letterSpacing: '-0.098rem'
      }],
      '48px': ['3rem', {
        lineHeight: '3.6rem',
        letterSpacing: '-0.15rem'
      }],
      '36px': ['2.25rem', {
        lineHeight: '2.925rem',
        letterSpacing: '-0.113rem',
      }],
      '32px': ['2rem', {
        lineHeight: '2.8rem',
        letterSpacing: '-0.04rem',
      }],
      '28px': ['1.75rem', {
        lineHeight: '2.275rem',
        letterSpacing: '-0.088rem',
      }],
      '27px': ['1.688rem', {
        lineHeight: '2.194rem',
        letterSpacing: '-0.084rem',
      }],
      '24px': ['1.5rem', {
        lineHeight: '2.1rem',
        letterSpacing: '-0.003rem',
      }],
      '20px': ['1.25rem', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.025rem'
      }],
      '18px': ['1.125rem', {
        lineHeight: '1.913rem',
        letterSpacing: '-0.023rem'
      }],
      '16px': ['1rem', {
        lineHeight: '1.7rem',
        letterSpacing: '-0.02rem'
      }],
      '14px': ['0.875rem', {
        lineHeight: '1.488rem',
        letterSpacing: '-0.018rem'
      }],
    },
    screens: {
      'xl': { 'max': '1399px' },
      'lg': { 'max': '1199px' },
      'md': { 'max': '991px' },
      'sm': { 'max': '767px' },
      'xs': { 'max': '576px' }

    },
    borderRadius: {
      '4px': '0.25rem',
      '8px': '0.5rem',
      '10px': '0.625rem',
      '12px': '0.75rem',
      '13px': '0.813rem',
      '14px': '0.875rem',
      '15px': '0.938rem',
      '20px': '1.25rem',
      '25px': '1.563rem',
      '30px': '1.875rem',
      '50px': '3.125rem',
      '100px': '6.25rem',
      'full': '31.25rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
      },
      screens: {
        maxWidth: '1656px',
        xl: '1399px',
        lg: '1199px',
        md: '991px',
        sm: '767px',
        xs: '576px',

      },
    },
    extend: {
      boxShadow: {
        'cookie': '0px -7px 14px rgba(0, 60, 164, 0.04)',
        'xm': '2px 10px 20px 0 rgba(41, 48, 57, 0.08)',
        'sm': '0 7px 8px  0 rgba(0, 60, 164, 0.05)',
        'md': '0 16px 28px 0 rgba(0, 60, 164, 0.05)',
        'lmd': '0 20px 40px 0 rgba(0, 60, 164, 0.07)',
        'xlg': '0 30px 60px 0 rgba(0, 60, 164, 0.07)',
        'lg': '0 30px 66px 0 rgba(0, 60, 164, 0.07)',
        'xl': '0 31px 66px 0 rgba(0, 60, 164, 0.13)',
        'xll': '0 31px 70px 0 rgba(0, 0, 0, 0.23)',
      },

    },

    plugins: [
      require("@tailwindcss/forms")({
        strategy: 'base', // only generate global styles
        strategy: 'class', // only generate classes
      }),
    ],
  },
}
