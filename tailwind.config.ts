/** @type {import('tailwindcss').Config} */
// animation source: https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/

import type { Config } from "tailwindcss";

const {
  iconsPlugin,
  dynamicIconsPlugin,
} = require("@egoist/tailwindcss-icons");
const plugin = require("tailwindcss/plugin");
const srcDir = ".";
const config: Config = {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
    `${srcDir}/nuxt.config.{js,ts}`,
    `${srcDir}/app.vue`,
    `${srcDir}/src/**/*.{html,js}`,
    `${srcDir}/public/**/*.{html,js}`,
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Poppins"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      animation: {
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-2":
          "text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-3":
          "text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-4":
          "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-5":
          "text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-6":
          "text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-7":
          "text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-8":
          "text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-9":
          "text-slide-9 22.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-10":
          "text-slide-10 25s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-11":
          "text-slide-11 27.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-12":
          "text-slide-12 30s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
        "text-slide-2": {
          "0%, 40%": {
            transform: "translateY(0%)",
          },
          "50%, 90%": {
            transform: "translateY(-33.33%)",
          },
          "100%": {
            transform: "translateY(-66.66%)",
          },
        },
        "text-slide-3": {
          "0%, 26.66%": {
            transform: "translateY(0%)",
          },
          "33.33%, 60%": {
            transform: "translateY(-25%)",
          },
          "66.66%, 93.33%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
        "text-slide-4": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "25%, 45%": {
            transform: "translateY(-20%)",
          },
          "50%, 70%": {
            transform: "translateY(-40%)",
          },
          "75%, 95%": {
            transform: "translateY(-60%)",
          },
          "100%": {
            transform: "translateY(-80%)",
          },
        },
        "text-slide-5": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
        "text-slide-6": {
          "0%, 13.33%": {
            transform: "translateY(0%)",
          },
          "16.66%, 30%": {
            transform: "translateY(-14.28%)",
          },
          "33.33%, 46.66%": {
            transform: "translateY(-28.57%)",
          },
          "50%, 63.33%": {
            transform: "translateY(-42.85%)",
          },
          "66.66%, 80%": {
            transform: "translateY(-57.14%)",
          },
          "83.33%, 96.66%": {
            transform: "translateY(-71.42%)",
          },
          "100%": {
            transform: "translateY(-85.71%)",
          },
        },
        "text-slide-7": {
          "0%, 11.43%": {
            transform: "translateY(0%)",
          },
          "14.28%, 25.71%": {
            transform: "translateY(-12.5%)",
          },
          "28.57%, 40%": {
            transform: "translateY(-25%)",
          },
          "42.85%, 54.28%": {
            transform: "translateY(-37.5%)",
          },
          "57.14%, 68.57%": {
            transform: "translateY(-50%)",
          },
          "71.42%, 82.85%": {
            transform: "translateY(-62.5%)",
          },
          "85.71%, 97.14%": {
            transform: "translateY(-75%)",
          },
          "100%": {
            transform: "translateY(-87.5%)",
          },
        },
        "text-slide-8": {
          "0%, 10%": {
            transform: "translateY(0%)",
          },
          "12.5%, 22.5%": {
            transform: "translateY(-11.11%)",
          },
          "25%, 35%": {
            transform: "translateY(-22.22%)",
          },
          "37.5%, 47.5%": {
            transform: "translateY(-33.33%)",
          },
          "50%, 60%": {
            transform: "translateY(-44.44%)",
          },
          "62.5%, 72.5%": {
            transform: "translateY(-55.55%)",
          },
          "75%, 85%": {
            transform: "translateY(-66.66%)",
          },
          "87.5%, 97.5%": {
            transform: "translateY(-77.77%)",
          },
          "100%": {
            transform: "translateY(-88.88%)",
          },
        },
        "text-slide-9": {
          "0%, 8.88%": {
            transform: "translateY(0%)",
          },
          "11.10%, 19.99%": {
            transform: "translateY(-10%)",
          },
          "22.2%, 31.08%": {
            transform: "translateY(-20%)",
          },
          "33.3%, 42.18%": {
            transform: "translateY(-30%)",
          },
          "44.4%, 53.28%": {
            transform: "translateY(-40%)",
          },
          "55.5%, 64.38%": {
            transform: "translateY(-50%)",
          },
          "66.6%, 75.48%": {
            transform: "translateY(-60%)",
          },
          "77.7%, 86.58%": {
            transform: "translateY(-70%)",
          },
          "88.8%, 97.68%": {
            transform: "translateY(-80%)",
          },
          "100%": {
            transform: "translateY(-90%)",
          },
        },
        "text-slide-10": {
          "0%, 8%": {
            transform: "translateY(0%)",
          },
          "10%, 18%": {
            transform: "translateY(-9.09%)",
          },
          "20%, 28%": {
            transform: "translateY(-18.18%)",
          },
          "30%, 38%": {
            transform: "translateY(-27.27%)",
          },
          "40%, 48%": {
            transform: "translateY(-36.36%)",
          },
          "50%, 58%": {
            transform: "translateY(-45.45%)",
          },
          "60%, 68%": {
            transform: "translateY(-54.54%)",
          },
          "70%, 78%": {
            transform: "translateY(-63.63%)",
          },
          "80%, 88%": {
            transform: "translateY(-72.72%)",
          },
          "90%, 98%": {
            transform: "translateY(-81.81%)",
          },
          "100%": {
            transform: "translateY(-90.90%)",
          },
        },
        "text-slide-11": {
          "0%, 7.3%": {
            transform: "translateY(0%)",
          },
          "9.1%, 16.42%": {
            transform: "translateY(-8.33%)",
          },
          "18.22%, 25.52%": {
            transform: "translateY(-16.66%)",
          },
          "27.32%, 34.62%": {
            transform: "translateY(-24.99%)",
          },
          "36.42%, 43.72%": {
            transform: "translateY(-33.32%)",
          },
          "45.52%, 52.82%": {
            transform: "translateY(-41.65%)",
          },
          "54.62%, 61.92%": {
            transform: "translateY(-49.98%)",
          },
          "63.72%, 71.02%": {
            transform: "translateY(-58.31%)",
          },
          "72.82%, 80.12%": {
            transform: "translateY(-66.64%)",
          },
          "81.92%, 89.22%": {
            transform: "translateY(-74.97%)",
          },
          "91.02%, 98.32%": {
            transform: "translateY(-83.30%)",
          },
          "100%": {
            transform: "translateY(-91.63%)",
          },
        },
        "text-slide-12": {
          "0%, 6.68%": {
            transform: "translateY(0%)",
          },
          "8.35%, 15.03%": {
            transform: "translateY(-7.69%)",
          },
          "16.7%, 23.38%": {
            transform: "translateY(-15.38%)",
          },
          "25.05%, 31.73%": {
            transform: "translateY(-23.07%)",
          },
          "33.4%, 40.08%": {
            transform: "translateY(-30.76%)",
          },
          "41.75%, 48.43%": {
            transform: "translateY(-38.45%)",
          },
          "50.1%, 56.78%": {
            transform: "translateY(-46.14%)",
          },
          "58.45%, 65.13%": {
            transform: "translateY(-53.83%)",
          },
          "66.8%, 73.48%": {
            transform: "translateY(-61.52%)",
          },
          "75.15%, 81.83%": {
            transform: "translateY(-69.21%)",
          },
          "83.5%, 90.18%": {
            transform: "translateY(-76.90%)",
          },
          "91.85%, 98.53%": {
            transform: "translateY(-84.59%)",
          },
          "100%": {
            transform: "translateY(-92.28%)",
          },
        },
      },
      // screens: {
      //   'xxs': '384px',
      //   'xs': '512px',
      //   'sm': '640px',
      //   'md': '768px',
      //   'lg': '1024px',
      //   'xl': '1280px',
      //   '2xl': '1536px',
      //   '3xl': '1796px',
      //   '4xl': '2052px',
      //   '5xl': '2308px',
      //   '6xl': '2564px',
      // },
      colors: {
        'default': '#494949'
      }
    },
    screens: {
      '3xs': '256px',
      '2xs': '384px',
      'xs': '512px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1796px',
      '4xl': '2052px',
      '5xl': '2308px',
      '6xl': '2564px',
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2473e9",
          "primary-focus": "#1852ab",
          "primary-content": "#ffffff",

          secondary: "#03c8d0",
          "secondary-focus": "#039298",
          "secondary-content": "#ffffff",

          accent: "#d4e5f5",
          "accent-focus": "#9aa7b3",
          "accent-content": "#ffffff",

          neutral: "#373c48",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#ced3d9",
          "base-content": "#1e2734",

          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#eab308",
          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
    iconsPlugin(),
    dynamicIconsPlugin(),
    plugin(({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          "animation-delay": (value: any) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
  darkMode: "class",
};

export default config;
