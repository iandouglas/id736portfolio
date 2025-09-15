import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        'eerie_black': { DEFAULT: '#1b2021', 100: '#060707', 200: '#0b0d0d', 300: '#111414', 400: '#161a1b', 500: '#1b2021', 600: '#445153', 700: '#6c8084', 800: '#9cabae', 900: '#ced5d7' },
        'ebony': { DEFAULT: '#51513d', 100: '#10100c', 200: '#212119', 300: '#313125', 400: '#414131', 500: '#51513d', 600: '#7b7b5d', 700: '#a0a081', 800: '#c0c0ab', 900: '#dfdfd5' },
        'moss_green': { DEFAULT: '#a6a867', 100: '#222214', 200: '#444527', 300: '#66673b', 400: '#87894f', 500: '#a6a867', 600: '#b7b985', 700: '#c9cba4', 800: '#dbdcc2', 900: '#edeee1' },
        'vanilla': { DEFAULT: '#e3dc95', 100: '#3c3810', 200: '#777020', 300: '#b3a830', 400: '#d3c95b', 500: '#e3dc95', 600: '#e9e4ab', 700: '#eeeac0', 800: '#f4f1d5', 900: '#f9f8ea' },
        'pearl': { DEFAULT: '#e3dcc2', 100: '#3a331b', 200: '#746635', 300: '#ae9a50', 400: '#c9bb8a', 500: '#e3dcc2', 600: '#e9e4cf', 700: '#efeadb', 800: '#f4f1e7', 900: '#faf8f3' }
      },
    },
  },
  plugins: [],
}
export default config
