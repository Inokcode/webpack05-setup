const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const target = 'web';
// const mode =
//   process.env.NODE_ENV === 'production'
//     ? ('production', (target = 'browserslist'))
//     : 'development';

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  entry: "./packages/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
        include: [path.resolve(__dirname, "packages")],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
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
  mode,
  target,
  devtool: "source-map",
  devServer: {
    watchContentBase: true,
    contentBase: "./build",
    hot: true,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new MiniCssExtractPlugin()],
};
