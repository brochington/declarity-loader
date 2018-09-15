var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        publicPath: '/lib/',
        library: 'declarity-loader',
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    },
    devtool: 'source-map'
}
