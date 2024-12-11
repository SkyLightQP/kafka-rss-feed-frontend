/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        GmarketSans: ['GmarketSansMedium', 'sans-serif'],
        WantedSans: ['Wanted Sans Variable', 'sans-serif']
      }
    }
  },
  plugins: []
};
