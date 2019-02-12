var path = require("path");
// var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader']

            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: "./src/index.html"
        // }),
        new webpack.HotModuleReplacementPlugin({})
    ]
};