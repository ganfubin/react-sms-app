const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  mode: 'production',
  output: {
    path: resolve('static'),
    filename: 'js/[name].dll.js',
    library: '_dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: resolve('dist/manifest.json'),
      context: path.resolve(__dirname, '../')
    })
  ]
};
