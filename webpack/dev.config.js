var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

var port = process.env.NODE_PORT || 3000;

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './source/'
  ],

  output: {
    filename: 'app.js',
    path: './source/build',
    publicPath: '/build/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
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
