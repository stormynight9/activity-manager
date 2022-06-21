module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hobbizer": "#4f46e5",
        "hobbizer-dark": "#4338ca",
        "hobbizer-gray": "#abb4b2",
        "hobbizer-light-gray": "#eaeceb",
        "hobbizer-green": "#e0e7ff",
        "facebook": "#3360ff",
        "primary-black": "#111827"
      },
      screens: {
        'calendar3': '767px',
        'calendar4': '1170px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}