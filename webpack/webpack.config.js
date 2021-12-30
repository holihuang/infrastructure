const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const My = require('./myPlugin')


module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                }, {
                    loader: 'less-loader',
                }
            ],
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'webpack',
            inject: 'body',
        }),
        // 告诉webpack那些库不参与打包，同时使用名称得改变
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.resolve('./dist/vendor-manifest.json')
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, './dist/*.dll.js')
        }),
        new My({
            title: 'my',
        }),
    ],
    devServer: {
        open: true,
        port: 8000,
        contentBase: 'dist',
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                secure: false,
                pathRewrite: function(path, req) {
                    console.log(path, path.replace('/api', '/a'))
                    return path.replace('/api', '/a')
                }
            },
        },
    },
    performance: {
        hints: false,
    },
}