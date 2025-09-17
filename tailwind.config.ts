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
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'gun-metal': {
          '50': '#f0f2f5',
          '100': '#e4e8ec',
          '200': '#c8d1d9',
          '300': '#aeb9c5',
          '400': '#94a2b2',
          '500': '#7a8b9e',
          '600': '#60738a',
          '700': '#4f5f71',
          '800': '#3e4b58',
          '900': '#313a45',
          '950': '#212830',
        },
      },
    },
  },
  plugins: [],
}
export default config
