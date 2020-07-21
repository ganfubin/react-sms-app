const {merge} = require('webpack-merge');
const progressbarWebpack = require('progress-bar-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const webpackConfigBase = require('./webpack.base.config');


module.exports = merge(webpackConfigBase, {
  mode: 'production',
  plugins: [
    new CompressionPlugin(),
    new progressbarWebpack()
  ]
});