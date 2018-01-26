const path = require('path');
const webpack = require('webpack');

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
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
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
        new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] })
    ],

    resolve: {
        alias: {
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            pages: path.join(__dirname, 'src/pages')
        }
    }
}