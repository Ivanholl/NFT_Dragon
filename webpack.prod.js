const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const WorkerPlugin = require('worker-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WorkerPlugin()
  ]
})
