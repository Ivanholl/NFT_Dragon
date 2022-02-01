const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const WorkerPlugin = require('worker-plugin')

module.exports = merge(common, {
  mode: 'development',
  plugins: [new ReactRefreshWebpackPlugin(), new EslintWebpackPlugin(), new WorkerPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
          plugins: [require.resolve('react-refresh/babel')]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  watch: true,
  devServer: {
    static: {
      directory: path.join(__dirname, './public')
    },
    hot: true,
    port: 3000
  }
})
