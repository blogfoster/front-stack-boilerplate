// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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

  ],

  devServer: {
    contentBase: './source',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
};
