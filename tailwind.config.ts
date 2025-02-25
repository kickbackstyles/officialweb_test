import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": "#333",
        "white": "#fff",
        "white-pink": "#ffefef"

      },
      spacing: {
        "xxs": "0.8vw",
        "xs": "1.3vw",
        "sm": "2.12vw",
        "md": "3.43vw",
        "lg": "5.56vw",
        "xl": "8.97vw",
        "2xl": "14.6vw",
        "3xl": "23.6vw",
        "4xl": "38.2vw",
        "5xl": "61.8vw"
      }
    },
    fontSize: {
      "xs": "2.3vw",
      "sm": "3.07vw",
      "md": "3.846vw",
      "lg": "5.64vw"
    },
    fontFamily: {
      "--font-hn-bold": "var(--hack-nard-Bold)"
    },
    lineHeight: {
      "md": "200%"
    },

  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

