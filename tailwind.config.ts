import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    screens: {
      'mobile-h': { 'raw': '(max-height: 500px) and (orientation: landscape)' },
    },
     fontFamily: {
  sans: [
    '"Helvetica Neue"', 
    'Helvetica', 
    'Arial', 
    'ui-sans-serif', 
    'system-ui', 
    'sans-serif'],
},    
  animation: {
  'bounce-slow': 'bounce 3s infinite',
} 

  },
},
 

  plugins: [],
} satisfies Config;



  
