import { type Config } from "tailwindcss";

export default {     
  darkMode: 'class', // dark mode support
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
        '40': '160px',
        '48': '192px',
        '56': '224px',
        '64': '256px',
        '72': '288px',
        '80': '320px',
        '96': '384px',
      },
      colors: {
        brand: {
          "DEFAULT": '#3ECF8E',
          "hover": '#36b67a',
          "muted": '#e6faf3',
          "surface": '#f4fdfa',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f172a',
          glass: {
            50: 'rgba(255,255,255,0.05)',
            100: 'rgba(255,255,255,0.08)',
            200: 'rgba(255,255,255,0.12)',
            300: 'rgba(255,255,255,0.18)',
            400: 'rgba(255,255,255,0.25)',
          }
        },

        "border": {
          "light": '#e4e4e7',
          "dark": '#3f3f46',
          "accent": "#50c878",
          "neutral": "#333333"
        },
        "accent": {
          "lighter": "#50c878",
          "darker": "#38686a",
        },
        "background": {
          "light": "#f3f4f6",
          "night": "#020618",
          "lighter": "#ffffff",
          "nightly": "#090c08",
          "argent": "#C0C0C0"
        },
        "text": {
          "dark": "#020618",
          "light": "#ffffff",
          "soft": '#a1a1aa',
          "night": "#000000",
        }
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
        'background': 'background-color, background-image',
        'border': 'border-color, border-width',
        'transform': 'transform',
        'all': 'all',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 0.1, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
} satisfies Config;
