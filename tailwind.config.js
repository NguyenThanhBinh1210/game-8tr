import withMT from '@material-tailwind/react/utils/withMT'
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c192c'
      }
    }
  },
  plugins: []
})
