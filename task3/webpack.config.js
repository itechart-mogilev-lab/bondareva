var path = require("path");
var PrettierPlugin = require("prettier-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
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
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new PrettierPlugin(),
    new webpack.HotModuleReplacementPlugin({})
  ]
};
