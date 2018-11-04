const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash:5].chunk.js',
    chunkFilename: 'js/[name].[hash:5].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      "@": resolve('../src')
    }
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '..', 'dist', 'manifest.json')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: '短信营销系统',
      template: resolve('../index.html'),
      vendor: 'js/vendor.dll.js',
      hash: true,
      inject: true
    }),
    new miniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "css/[name].[hash].css"
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i
    })],
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: "initial",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
      minSize: 1000,                // 最小尺寸，默认0
      minChunks: 2,              // 最小 chunk ，默认1
      maxAsyncRequests: 1,       // 最大异步请求数， 默认1
      maxInitialRequests: 1,    // 最大初始化请求书，默认1
      name: true,              // 名称，此选项课接收 function
      cacheGroups: {                 // 这里开始设置缓存的 chunks
        common: {
          chunks: "initial",
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 1,
          enforce: true
        }
      }
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
        test: /\.css$/,
        use: [
          {loader: miniCssExtractPlugin.loader},
          {loader: 'css-loader?importLoaders=1'},
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {loader: 'css-loader?importLoaders=1'},
          {loader: 'less-loader', options: {javascriptEnabled: true}},
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
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'images/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ]
      },
    ]
  }

};