
/* eslint-disable no-undef */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { library } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: "MyLibrary",
    libraryTarget: "umd"
  },
  devServer: {
    hot: true, // Enable Hot Module Replacement
    liveReload: true, // Enable full page reload when changes are detected
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/main.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
