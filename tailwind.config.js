/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        danger: '#FC1F08',
        attention: '#FF9F1F',
        success: '#05D869',
        continue: '#2FC5F7',

        purple900: '#480980',
        purple700: '#5A2F80',
        purple500: '#730ECC',
        purple300: '#9013FE',
        purple100: '#B45EFF',

        gray900: '#222222',
        gray700: '#4A4A4A',
        gray500: '#AFAFAF',
        gray300: '#ECECEC',

        white: '#FFFFFF',

        // Gradient Dark = purple300 -> gray900
        // Gradient Light = gray300 -> purple300
      },
      fontSize: {
        title1: ['2.375rem', { fontWeight: 'light' }],
        title2: ['1.875rem', { fontWeight: 'light' }],
        title3: ['1.25rem', { fontWeight: 'medium' }],
        subtitle: ['1rem', { fontWeight: 'medium ' }],
        body: ['0.875rem', { fontWeight: 'regular' }],
        button: ['1rem', { fontWeight: 'medium' }],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        medium: '500',
        bold: '700',
      },
      fontFamily: {
        worksans: 'Work Sans, sans-serif',
        kanit: 'Kanit, sans-serif',
      },
    },
  },
  plugins: [],
}
