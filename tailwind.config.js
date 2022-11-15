/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'font-vol':'Vollkorn', 
        'font-didact':'Didact Gothic', 
        'font-dan':'Dancing Script',
        'font-robo':'Roboto',
      }
      
    },
  
  },
  plugins: [],
}


