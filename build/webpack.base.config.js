const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const progressbarWebpack = require('progress-bar-webpack-plugin');

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
        new progressbarWebpack (),
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
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
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