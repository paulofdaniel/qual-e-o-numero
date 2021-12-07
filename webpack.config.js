const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', 
    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001,
        open: true,
        hot: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                } 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new Dotenv()
    ]
}