var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
        }]
    },
    output: {
        filename: "index_bundle.js",
        path: __dirname + '/dist'
    },
    sassLoader: {
        includePaths: [ 'app/style' ]
    },
    plugins: [ 
        HTMLWebpackPluginConfig, 
        ExtractTextPluginConfig
    ]
}