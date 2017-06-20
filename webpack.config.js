/*eslint-env node*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const makeLocalModuleRegex = require('local-module-regex');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(process.cwd(), 'public'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: makeLocalModuleRegex(process.cwd()),
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                include: makeLocalModuleRegex(process.cwd()),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                camelCase: true,
                                importLoaders: 1,
                                localIdentName: '[path][name]---[local]---[hash:base64:5]'
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    externals: [
        // leave any require that starts with a letter or a number in-tact
        (context, request, callback) => {
            const isExternalPackage = /^[a-z0-9]/i.test(request);
            const isCss = /\.css$/.test(request);
            return callback(null, !isCss && isExternalPackage ? `commonjs ${request}` : false);
        }
    ],
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css'
        })
    ]
};
