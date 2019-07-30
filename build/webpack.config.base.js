// path 是 nodejs 裡面的一個基本包
const path = require('path')

const config = {
    mode: process.env.NODE_ENV || 'production',
    target: 'web',
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'resources/[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = config;