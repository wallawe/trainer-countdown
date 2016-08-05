var HtmlWebpackPlugin       = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

var ExtractTextPlugin       = require('extract-text-webpack-plugin');
var ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }]
    },
    output: {
        filename: "index_bundle.js",
        path: __dirname + '/dist'
    },
    sassLoader: {
        includePaths: [ 'app/style' ]
    },
    postcss: function() {
        return [precss, autoprefixer]
    },
    plugins: [ 
        HTMLWebpackPluginConfig, 
        ExtractTextPluginConfig
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}