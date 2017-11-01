const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  context: __dirname,
  entry: {
    app: [
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
          './app.js'
        ],
  },
  output: {
    path: __dirname + '/server/dist',
    filename: '[name].bundle.js',
    publicPath: "http://localhost:8080/",
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname
  },
  plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
})
