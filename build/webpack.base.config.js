const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const progressbarWebpack = require('progress-bar-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = {
  entry: {
    app: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:5].chunk.js',
    chunkFilename: '[name].[hash:5].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {}
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../index.html'),
      title: '短信营销系统',
      inject: true
    }),
    new progressbarWebpack(),
    new miniCssExtractPlugin({
      filename: "[name].[hash:5].css",
      chunkFilename: "[id].[hash:5].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          name: "common",
          minChunks: 2,
          minSize: 0,
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: 'vendor',
          priority: 10
        }
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          {loader: miniCssExtractPlugin.loader},
          {loader: "css-loader"},
          {loader: "less-loader"},
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({
                  "browsers": [
                    "defaults",
                    "not ie < 11",
                    "last 2 versions",
                    "> 1%",
                    "iOS 7",
                    "last 3 iOS versions"
                  ]
                })
              ]
            }
          }]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
    ]
  }

};