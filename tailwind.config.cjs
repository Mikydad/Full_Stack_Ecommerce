/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
        alegreya: ['Alegreya', 'serif'],
        science: ['"Science Gothic"', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],      }
    },
  },
  plugins: [],
}
