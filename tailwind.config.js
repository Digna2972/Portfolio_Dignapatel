/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        "color-background": "#040D12" ,
        "color-text": "#D4AC0D ",
        "color-footer": "#5c5470"
      }
    },
  },
  plugins: [],
}

