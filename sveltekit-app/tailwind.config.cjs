/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Goudy: ['GoudyBookletter1911'],  // Goudy Bookletter 1911
        'serif': ['GoudyBookletter1911', 'Times New Roman', 'serif'],  // Goudy Bookletter 1911
      },
    },
  },
  plugins: [],
}
