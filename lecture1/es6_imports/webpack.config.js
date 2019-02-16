const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: ['babel-polyfill', `${APP_DIR}/a.js`],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 3000, // port number
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_DIR]),
    new HtmlWebPackPlugin({
      template: `${APP_DIR}/index.html`,
      filename: './index.html',
    }),
  ],
};
