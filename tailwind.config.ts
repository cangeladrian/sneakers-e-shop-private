import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
  extend: {
    screens: {
      'mobile-h': { 'raw': '(max-height: 500px) and (orientation: landscape)' },
    },
  },
},
 
    fontFamily: {
      // Povieme Tailwindu, aby pod triedou 'font-syne' hľadal našu premennú
      syne: ["var(--font-syne)", "sans-serif"],
    },
        colors: {
        virexRed: '#C44739',
        virexGrey: '#D1D1D1',
        virexBlack: '#1A1A1A',
      },
      animation: {
  'bounce-slow': 'bounce 3s infinite',
}
    },
  },

  
  plugins: [],
} satisfies Config;
