const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const progressbarWebpack = require('progress-bar-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const webpackConfigBase = require('./webpack.base.config');


function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = merge(webpackConfigBase, {
  mode: 'production',
  plugins: [
    new CompressionPlugin(),
    new progressbarWebpack(),
    new CleanWebpackPlugin([resolve('../dist')], {
      root: path.resolve(__dirname, '../')
    }),
  ]
});