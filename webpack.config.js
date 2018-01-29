const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'src/index.js'),
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=50000'
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: path.join(__dirname, './dist')
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
        // new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    ],

    resolve: {
        alias: {
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            pages: path.join(__dirname, 'src/pages'),
            actions: path.join(__dirname, 'src/actions'),
            reducers: path.join(__dirname, 'src/reducers'),
            stores: path.join(__dirname, 'src/stores')
        }
    }
}