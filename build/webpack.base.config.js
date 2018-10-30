const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    filename: 'js/[name].[hash:5].chunk.js',
    chunkFilename: 'js/[name].[hash:5].chunk.js',
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
    new miniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "css/[name].[hash].css"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "initial",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
      minSize: 0,                // 最小尺寸，默认0
      minChunks: 1,              // 最小 chunk ，默认1
      maxAsyncRequests: 1,       // 最大异步请求数， 默认1
      maxInitialRequests: 1,    // 最大初始化请求书，默认1
      name: () => {
      },              // 名称，此选项课接收 function
      cacheGroups: {                 // 这里开始设置缓存的 chunks
        priority: "0",                // 缓存组优先级 false | object |
        vendor: {                   // key 为entry中定义的 入口名称
          chunks: "initial",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          test: /react|lodash/,     // 正则规则验证，如果符合就提取 chunk
          name: "vendor",           // 要缓存的 分隔出来的 chunk 名称
          minSize: 0,
          minChunks: 1,
          enforce: true,
          maxAsyncRequests: 1,       // 最大异步请求数， 默认1
          maxInitialRequests: 1,    // 最大初始化请求书，默认1
          reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
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
          {loader: miniCssExtractPlugin.loader},
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
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'images/'
        }
      },
    ]
  }

};