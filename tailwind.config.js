/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
         'arial':'Arial'
      },
      spacing: {
        '14': '3.5rem',
        '125px': '125px'
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
        'darkblue-500': '#485769',
        'darkblue-600': '#37475A',
        'darkblue-700': '#232F3E',
        'darkblue-900': '#191E26',
        'darkblue-950': '#131A22',
        'gold-100': '#febd69',
        'gold-200': '#FAA63A',
        'orange-650': '#e47911',
        'yellow-350': '#f0c14b'

      },
      spacing: {
        '7': '1.75rem',
        '75px': '75px',
        '210px': '210px'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('/img/bursts.svg')",
        'spotify-theme-mobile': "url('/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  plugins: [],
}

