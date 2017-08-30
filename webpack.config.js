const path = require('path')
    , webpack = require('webpack')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
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

        devtool: 'source-map',

        resolve: {
            modules: ['node_modules', 'bower_components'],
            extensions: ['.ts', '.js', '.*'],
            alias: {
                'bootstrap.min.css': path.join(__dirname, 'src/bower_components/bootstrap/dist/css/bootstrap.min.css'),
                'ng2-toasty-style-bootstrap.css': path.join(__dirname, 'node_modules/ng2-toasty/style-bootstrap.css')
            }
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
                }, {
                    test: /\.css/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }, {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin('style.css', {allChunks: true}),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                {}
            )
        ]

    }
;

module.exports = config;