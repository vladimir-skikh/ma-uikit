module.exports = {
  src: './src',
  distPath: './dist',
  reexports: [
    '/components',
    '/utils',
    '/assets',
  ],
  ignore: [
    'src/internal/**',
    'src/**/*.stories/**',
    'src/**/*.stories.*',
    'src/**/__stories__/**',
  ],
};
