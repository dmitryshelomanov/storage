var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index',
    output: {
        path: __dirname + "/dist",
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ["env"],
                }
            }
        ]
    }
};