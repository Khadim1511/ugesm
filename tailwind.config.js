/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ugesm-orange': '#ff8c00',
        'ugesm-brown': '#8b4513',
        'ugesm-red': '#dc2626',
        'ugesm-green': '#059669',
      },
    },
  },
  plugins: [],
}
