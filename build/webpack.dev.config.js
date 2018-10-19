const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackConfigBase = require('./webpack.base.config');


const PORT = 8080;

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = merge(webpackConfigBase, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        overlay: true,
        hot: true,
        contentBase: resolve('dist'),
        host: '127.0.0.1',
        port: PORT,
        compress: true
    }
});