const path = require('path')
    , webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin');

const
    config = {
        context: path.join(__dirname, 'src'),

        entry: {
            bundle: path.join(__dirname, 'src/index.ts')
        },

        output: {
            path: path.join(__dirname, 'dst'),
            filename: 'bundle.js'
        },

        resolve: {
            modules: ['node_modules'],
            extensions: ['.ts', '.js']
        },

        resolveLoader: {
            modules: ['node_modules'],
            extensions: ['.js']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader'
                        }, {
                            loader: 'angular2-template-loader'
                        }
                    ]
                }, {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'raw-loader'
                        }
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            })
        ]

    };

module.exports = config;