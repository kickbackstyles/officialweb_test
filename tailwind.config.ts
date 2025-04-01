import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#333',
        gray: '#cbcbcb',
        white: '#fff',
        'white-pink': '#ffefef',
        red: '#E31D1D',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      spacing: {
        xxxxs: '0.31vw',
        xxxs: '0.502vw',
        xxs: '0.8vw',
        xs: '1.3vw',
        sm: '2.12vw',
        md: '3.43vw',
        lg: '5.56vw',
        xl: '8.97vw',
        '2xl': '14.6vw',
        '3xl': '23.6vw',
        '4xl': '38.2vw',
        '5xl': '61.8vw',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    fontSize: {
      xs: '2.3vw',
      sm: '3.07vw',
      md: '3.846vw',
      lg: '5.64vw',
      'xs-pc': '0.65vw',
      'sm-pc': '0.83vw',
      'md-pc': '1.25vw',
    },
    fontFamily: {
      '--font-hn-bold': 'var(--hack-nard-Bold)',
    },
    lineHeight: {
      md: '200%',
    },
  },
  darkMode: ['class', 'class'],
  plugins: [nextui(), require('tailwindcss-animate')],
}
export default config
