/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        Baner2:"url('/src/accest/AboutUS/Baner2.webp')"
      },
      screens:{
        'tablet':{
          'raw': '(min-width: 1050px)'
        },
        'laptop':{'raw': '(min-width: 1385px)'},
        'max-laptop':{'raw': '(max-width: 1385px)'},
        'phone':{'raw': '(max-width: 950px)'},
      }
    },
    fontFamily:{
      mono:'Lato',
      title:'Thicker'
    },
    
  },
  plugins: [],
}