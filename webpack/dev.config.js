var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',

  entry: './source/router',

  output: {
    filename: 'app.js',
    path: './source/build'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: './source',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
};
