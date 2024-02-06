/// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [ "index.html", "./src/**/*.{js,jsx,ts,tsx}" ],
    // Add more file patterns if needed
  theme: {
    extend: {

      colors: {
        primary: '#131313',
        secondary: '#222222',
        accent: '#179957',
        accendark: "#184d47",
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
};


