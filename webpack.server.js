const path = require("path");
const NodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { readConfig } = require("./src/readConfig");

module.exports = ({ serverName }) => {
  const { cacheServerUrl } = readConfig(serverName);
  const defines = {
    CACHE_SERVER_URL: JSON.stringify(cacheServerUrl),
  };
  return {
    entry: path.resolve(__dirname, "./src/server.tsx"),
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "server.js",
    },
    target: "node",
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [NodeExternals()],
    resolve: {
      extensions: [".jsx", ".js", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack", "cache-loader", "url-loader"],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "[hash].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [new CleanWebpackPlugin(), new DefinePlugin(defines)],
  };
};
