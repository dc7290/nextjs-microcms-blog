module.exports = {
  plugins: {
    'postcss-custom-properties': {
      preserve: false,
      importFrom: ['./src/styles/colors.css'],
    },
    'postcss-nested': {},
  },
}
