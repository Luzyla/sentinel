import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'first-color': '#040404',
      'second-color': '#2c2c29',
      'pure-black': '#000',
      'accent-color': '#f8c409',
      'accent-2nd-color': '#fbc32b',
      'light-color': '#cdd7d8',
      'pure-white': '#fff',
    },
  },
  plugins: [],
};
export default config;
