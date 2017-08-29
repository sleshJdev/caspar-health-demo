const path = require('path')
    , webpack = require('webpack');

const config = {

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
                    }
                ]
            }
        ]
    },

    plugins: [
    ]

};


module.exports = config;