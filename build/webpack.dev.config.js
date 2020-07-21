const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');

const webpackConfigBase = require('./webpack.base.config');

module.exports = merge(webpackConfigBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    overlay: true,
    hot: true,
    contentBase: path.join(__dirname, "..", "dist"),
    host: '127.0.0.1',
    port: 8080,
    compress: true
  }
});