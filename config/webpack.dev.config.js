const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.js');

const PORT = process.env.PORT || 8888;

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

module.exports = devConfig;
