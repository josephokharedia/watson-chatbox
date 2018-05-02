const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    entry: {
        main: path.resolve(__dirname, 'src', 'index.js')
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3001
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [
                            'transform-es2015-destructuring',
                            'transform-object-rest-spread'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}