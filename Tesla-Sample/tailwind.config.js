/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#111111",
        "secondary": "#898989",
        "tertiary": "#DFDFDF",
        "lightGreen": "#4CF065",
        "lightYellow": "#FFBD00",
        "Card": "#1E1E1E",
      },
      fontFamily:{
        "Roboto" : "Roboto",
        "Shanti" : "Shanti",
        "Slab": "Slab",
      },
      fontWeight: {
        '200': '200',
      },
      
    },
  },
  plugins: [],
}

