const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif|svg)$/i, type: "asset" },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  resolve: { extensions: [".js", ".jsx"] },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};
