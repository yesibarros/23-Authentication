const path = require("path");

const REACT_DIRPATH = path.resolve(__dirname, "src");
const BUILD_DIRPATH = path.resolve(__dirname, "src/public/javascripts/dist");

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    root: path.resolve(REACT_DIRPATH, "Root.jsx"),
  },
  output: {
    path: BUILD_DIRPATH,
    publicPath: "/javascripts/dist/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: REACT_DIRPATH,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                ["@babel/plugin-transform-async-to-generator"],
                ["@babel/plugin-syntax-dynamic-import"],
                [
                  "@babel/plugin-transform-runtime",
                  {
                    regenerator: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "../",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: "10000",
              name: "[path][name].[ext]",
              outputPath: "../",
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
};
