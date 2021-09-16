const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './widget/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'sphere-content.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};