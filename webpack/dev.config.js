var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

var port = process.env.NODE_PORT || 3000;

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './source/router'
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
