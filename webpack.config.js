const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsConfigPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = (entry, output, filename, html = null, target = null) => {
        return {
                mode: 'development',
                target: target,
                entry: entry,
                output: {
                        path: path.join(__dirname, output),
                        filename: filename,
                        publicPath: '/',
                },
                optimization: {
                        minimize: true,
                        minimizer: [new TerserPlugin()],
                },
                module: {
                        rules: [
                                {
                                        test: /\.(ts|tsx)$/,
                                        exclude: /node_modules/,
                                        use: 'ts-loader',
                                },
                        ],
                },
                resolve: {
                        extensions: ['.ts', '.tsx', '.js', '.jsx'],
                        plugins: [
                                new TsConfigPlugin({
                                        configFile: './tsconfig.json',
                                }),
                        ],
                },
                plugins: plugin(html),
        };
};
