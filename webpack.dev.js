const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9900,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    hot: true,
  },
  watchOptions: {
    ignored: /node_modules/, // Abaikan node_modules
    poll: 1000, // Periksa perubahan setiap 1 detik
  },
  cache: {
    type: 'filesystem',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
