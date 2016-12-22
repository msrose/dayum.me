/* eslint-env node */

const path = require('path');
const { DefinePlugin, optimize: { UglifyJsPlugin } } = require('webpack');

module.exports = {
  context: path.resolve('./src'),
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./public/build'),
    publicPath: '/build'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ].concat(process.env.NODE_ENV === 'production' ? [
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ] : []),
  devServer: {
    contentBase: './public'
  },
  devtool: 'source-map'
};
