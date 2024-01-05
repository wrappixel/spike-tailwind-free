/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    colors: {
			blue:{
				200:'#e1f5fa',
				300:'#46caeb',
				400:'#3cacc8',
				500:'#e5f3fb',
				600:'#0085db',
				700:'#0071ba'
			},
			teal:{
				400:"#dffff3",
				500:'#4bd08b',
				600:'#40b176',				
			},
			yellow:{
				400:"#fff6ea",
				500:'#f8c076',
				600:'#d7a564',				
			},
			red:{
				400:"#ffede9",
				500:'#fb977d',
				600:'#d5806a',
			},
			gray:{
				100:'#e6ecf1',
				200:'#e7ecf0',
        300:'#0000008c',
				400:'#707a82',
				500:'#111c2d',
				600:'#c4c9cc',
				700: '#5f686f',
        800:'#e2e4e6',
				
			},
			"transparent":'transparent',
			"surface" : '#f0f5f9',
			"white":"#fff",
    },

    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    borderRadius: {
      none: "0px",
      sm: '7px',
      md: "18px",
      full: "50%",
      "2xl": "30px",
      "3xl": "50rem",
    },
    extend: {
      boxShadow: {
        sm: '0 0.5rem 1rem rgba(0,0,0,0.15)',
        md: "0px 2px 6px rgba(37,83,185,0.1)",
        xl: "inset 0 1px 2px rgba(90,106,133,0.075)",
        
      },

    },
    container: {
      center: true,
      padding: "20px",
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
    require("@tailwindcss/typography"),
    require("preline/plugin"),
  ],
};
