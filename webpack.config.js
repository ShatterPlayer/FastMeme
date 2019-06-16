const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'eslint-loader'
      },
      {
        test: /\.(ttf|svg|png|jpg)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'url-loader',
        options: {
          limit: 20000
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: 'src/static', to: '.' }]),
    new workboxPlugin.InjectManifest({
      swDest: 'sw.js',
      swSrc: path.resolve(__dirname, 'src', 'sw.js'),
      exclude: new RegExp('_redirects')
    })
  ],

  devServer: {
    historyApiFallback: true
  }
};
