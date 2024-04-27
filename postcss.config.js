/* eslint-disable global-require */
module.exports = () => ({
  plugins: [
    require('postcss-mixins'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
  ],
});