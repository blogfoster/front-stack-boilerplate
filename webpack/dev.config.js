var path = require('path');
var webpack = require('webpack');

var port = process.env.NODE_PORT || 3000;

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    // 'webpack-hot-middleware/client',
    './source/'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },

  devServer: {
    contentBase: './source',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: port
  }
};
