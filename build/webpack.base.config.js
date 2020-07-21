const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', resolve('../src/main.js')]
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash:5].chunk.js',
    chunkFilename: 'js/[name].[hash:5].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      "@": resolve('../src'),
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../static'),
    //   to: path.resolve(__dirname, '../dist'),
    // }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: '短信营销系统',
      template: resolve('../index.html'),
      hash: true,
      inject: true
    }),
    new miniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "css/[name].[hash].css"
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        common: {
          chunks: "initial",
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        antd: {
          name: 'antd',
          priority: 20,
          test: /[\/]node_modules[\/]antd[\/]/,
        },
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
          {loader: 'css-loader'},
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
          {loader: 'css-loader'},
          {loader: 'less-loader', options: {javascriptEnabled: true}},
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")
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