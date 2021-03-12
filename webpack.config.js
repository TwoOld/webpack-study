const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const minicssextractplugin = require('mini-css-extract-plugin')
module.exports = {
    // webpack4 0配置默认
    // entry: './src/index.js',
    // output: {
    //     filename: '[name].js',
    //     path: path.resolve(__dirname, './dist')
    // },
    entry: {
        index: './src/index.js',
        test: './src/test.js',
        // publicPath: 'http://www.baidu.com'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    resolveLoader: {
        modules: ['node_modules', 'loaders']
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    minicssextractplugin.loader,
                    // {
                    //     loader: 'css-loader',
                    //     options: {}
                    // },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [minicssextractplugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            // {
            //     test: /\.less$/,
            //     use: [minicssextractplugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            // },
            {
                test: /\.js$/,
                use: [
                    // path.resolve(__dirname, './loaders/replace-loader.js'),
                    'replace-loader',
                    {
                        // loader: path.resolve(__dirname, './loaders/replace-loader-async.js'),
                        loader: 'replace-loader-async',
                        options: {
                            name: 'cyzy'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new minicssextractplugin({
            filename: '[name].css'
        })
    ]
}