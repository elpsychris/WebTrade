/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000', 'webpack/hot/dev-server', './assets/js/main'
    ],
    externals: [
        'canvas'
    ],
    output: {
        path: __dirname + '/TTLStockChart/',
		filename: 'TTLStockChart_bundle.js',
        publicPath: './TTLStockChart/'
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=10000"
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.jsx?$/,
                loaders: "babel-loader",
                include: path.join(__dirname, 'assets')
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    }
};
