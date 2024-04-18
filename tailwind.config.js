/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      big: ['Big Shoulders Display', 'sans-serif'],
      lexend: ['Lexend Deca', 'serif'],
    },
    colors:{
      orange:'hsl(31, 77%, 52%)',
      darkcyan:'hsl(184, 100%, 22%)',
      verydarkcyan:'hsl(179, 100%, 13%)',
      transparentwhite:'hsla(0, 0%, 100%, 0.75)',
      verylightgray:'hsl(0, 0%, 95%)'
    },
    borderColor:{
      orange:'hsl(31, 77%, 52%)',
      darkcyan:'hsl(184, 100%, 22%)',
      verydarkcyan:'hsl(179, 100%, 13%)',
      transparentwhite:'hsla(0, 0%, 100%, 0.75)',
      verylightgray:'hsl(0, 0%, 95%)'
    },
    backgroundColor:{
      white:'white',
      orange:'hsl(31, 77%, 52%)',
      darkcyan:'hsl(184, 100%, 22%)',
      verydarkcyan:'hsl(179, 100%, 13%)',
      transparentwhite:'hsla(0, 0%, 100%, 0.75)',
      verylightgray:'hsl(0, 0%, 95%)'
    },
    extend: {},
  },
  plugins: [],
}