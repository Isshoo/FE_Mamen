const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.DS_Store$/, /\.DS_Store\.br$/, /\.DS_Store\.gz$/],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://api.mamen.site'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'mamen-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://mamenawsbucket.s3.ap-southeast-3.amazonaws.com'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'mamen-pictures',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
          },
        },
      ],
    }),
  ],
});
