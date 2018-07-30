const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const VENDOR_LIBS = [
        './node_modules/jquery/dist/jquery.min.js', 
        './node_modules/popper.js/dist/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        './node_modules/aos/dist/aos.js',
        './node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
        './node_modules/angular/angular.min.js'
    ];

module.exports = {
    entry: {
                app: './src/app.js',
                vendors: VENDOR_LIBS
            },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle-[chunkhash].js',
        publicPath: './'
    },
    module:{
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'imgs/'
                    }
                }, 
                'image-webpack-loader']
            }
        ]
    },
    devServer: {
     contentBase: './dist',
     stats: 'errors-only'
    },
    plugins: [
         new webpack.optimize.CommonsChunkPlugin({
            names: ['vendors', 'manifest']
            }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        })
    ]
};