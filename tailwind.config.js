module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-bg': 'var(--main-bg)',
        'second-bg': 'var(--second-bg)',
        'txt-color': 'var(--txt-color)',
        'txt-white': 'var(--txt-white)',
        'main-color': 'var(--main-color)',
        'second-color': 'var(--second-color)',

        'main-bg-light': 'var(--main-bg-light)',
        'second-bg-light': 'var(--second-bg-light)',
        'txt-color-light': 'var(--txt-color-light)',

        'main-bg-dark': 'var(--main-bg-dark)',
        'second-bg-dark': 'var(--second-bg-dark)',
        'txt-color-dark': 'var(--txt-color-dark)',

        'main-color-blue': 'var(--main-color-blue)',
        'second-color-blue': 'var(--second-color-blue)',

        'main-color-red': 'var(--main-color-red)',
        'second-color-red': 'var(--second-color-red)',

        'main-color-cyan': 'var(--main-color-cyan)',
        'second-color-cyan': 'var(--second-color-cyan)',

        'main-color-green': 'var(--main-color-green)',
        'second-color-green': 'var(--second-color-green)',

        'main-color-orange': 'var(--main-color-orange)',
        'second-color-orange': 'var(--second-color-orange)',
      },
    },
    fontFamily: {},
    maxWidth: {
      unset: 'unset',
    },
    width: {
      'sidebar-width': 'var(--sidebar-width)',
      'sidebar-width-1024': 'var(--sidebar-width-1024)',
      'max-content': 'max-content',
    },
    padding: {
      'sidebar-width': 'var(--sidebar-width)',
      'sidebar-width-1024': 'var(--sidebar-width-1024)',
    },
    borderRadius: {
      'border-radius': 'var(--border-radius)',
    },
    boxShadow: {
      'box-shadow': 'var(--box-shadow)',
      'box-shadow-light': 'var(--box-shadow-light)',
      'box-shadow-dark': 'var(--box-shadow-dark)',
    },
    height: {
      'topnav-height': 'var(--topnav-height)',
    },
    transitionTimingFunction: {
      'transition-cubic': 'var(--transition-cubic)',
    },
    fontSize: {
      'icon-fontsize-1024': 'var(--icon-fontsize-1024)',
    },
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      'min-576': { min: '576px' },
      'min-2400': { min: '2400px' },
      'max-1920': { max: '1920px' },
      'max-1440': { max: '1440px' },
      'max-1366': { max: '1366px' },
      'max-xl': { max: '1280px' },
      'max-lg': { max: '1024px' },
      'max-md': { max: '768px' },
      'max-sm': { max: '640px' },
      'max-xs': { max: '576px' },
      'max-440': { max: '440px' },
      'max-375': { max: '375px' },
      'max-320': { max: '320px' },
    },
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      auto: 'auto',
    },
  },
}
