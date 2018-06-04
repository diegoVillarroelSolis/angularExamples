var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require("path");
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.aot.ts'
  },

  output: {
    path: helpers.root('aot'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ 
    //   mangle: {
    //     keep_fnames: true
    //   }
    // }),
    // AOT Plugin 
    new AotPlugin({
      tsConfigPath: './src/tsconfig.aot.json',
      entryModule: helpers.root('src/app/app.module.ts#AppModule')
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});