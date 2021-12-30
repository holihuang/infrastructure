const path = require('path')
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom', 'react-redux']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve('dist'),
        library: '[name]_[hash]',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: path.resolve('dist', '[name]-manifest.json')
        })
    ]
}