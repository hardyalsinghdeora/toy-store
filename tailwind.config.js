/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#f11837',
        secondary: '#ff6408',
        accent: '#fcae01',
        success: '#56b621',
        info: '#27ca80',
        link: '#1a8de6',
        dark: '#282828',
        light: '#f9f9f9',
        text: '#333333',
        'text-light': '#959595',
      },
    },
  },
  plugins: [],
}

