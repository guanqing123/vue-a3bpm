const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'template.html')
    }),
    new VueLoaderPlugin()
]
const devServer = {
    port: 9999,
    host: '0.0.0.0',
    open: 'Chrome',
    overlay: {
        warnings: true,
        errors: true
    },
    historyApiFallback: {
        index: '/index.html'
    }
}

let config
if (isDev) {
    config = merge(baseConfig, {
        devtool: '#cheap-module-eval-source-map',
        devServer,
        plugins: defaultPlugins
    })
}

module.exports = config;