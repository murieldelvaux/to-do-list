/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    // tokens configurations
    fontSize:{
      xs: 12,
      sm: 14,
      md: 16,
    },
    lineHeight:{
      line: 20,
    },
    colors:{
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      gray:{
        700:'#0D0D0D',
        600:'#1A1A1A',
        500:'#262626',
        400:'#333333',
        300:'#808080',
        200:'#D9D9D9',
        100:'#F2F2F2',
      },
      purple:{
        400: '#8284FA',
        900: '#5E60CE',
      },
      blue:{
        400: '#4EA8DE',
        900: '#1E6F9F',
      },
      danger: '#E25858',
    },
    extend: {
      fontFamily:{
        sans:'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
