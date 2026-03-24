/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./app/**/*.{js,jsx}','./components/**/*.{js,jsx}'],
  theme:{
    extend:{
      colors:{
        ink:'#0A0A08',cream:'#F2EDDF',gold:'#C8A96E',
        rust:'#A63D2F',sage:'#3D5247',muted:'#7A7468',
      },
      fontFamily:{
        display:['Cormorant Garant','Georgia','serif'],
        sans:['Jost','system-ui','sans-serif'],
      },
    },
  },
  plugins:[],
}
