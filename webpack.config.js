/* eslint-env node */

const path = require('path');

module.exports = {
  entry: [
    './src/styles.scss',
    './src/app'
  ],
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
  devServer: {
    contentBase: './public'
  }
};
