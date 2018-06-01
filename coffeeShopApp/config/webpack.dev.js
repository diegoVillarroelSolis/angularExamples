var webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require("path");

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: path.resolve(__dirname + "./../src/tsconfig.json")
            }
          },
          "angular2-template-loader"
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});