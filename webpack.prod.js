const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
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
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 90,
          },
        },
      ],
      overrideExtension: true,
    }),

    new CompressionPlugin({
      algorithm: 'gzip',
    }),

    new BrotliPlugin(),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.DS_Store$/, /\.DS_Store\.br$/, /\.DS_Store\.gz$/],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://api.mamen.site'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'mamen-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://res.cloudinary.com/dtkczgmyn/image/upload/v1731908514/mamenimage/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'mamen-pictures',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'font-awesome',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/webfonts/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'font-awesome',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'font-awesome',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://fonts.googleapis.com/css2?family=Arizonia&family=League+Gothic&family=Lilita+One&family=Mouse+Memoirs&family=Oxygen:wght@300;400;700&display=swap'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'fonts-website',
          },
        },
      ],
    }),
  ],
});
