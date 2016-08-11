const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src', 'index.js'),
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty',
  }
}
