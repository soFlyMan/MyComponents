const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  context: __dirname,
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/server/dist',
    filename: '[name].bundle.js',
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    contentBase: __dirname
  },

})
