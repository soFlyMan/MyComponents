const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: "http://localhost:8080/assets",
  },
  devServer: {
    contentBase: __dirname
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react']},
          // query: { presets:['react'] },
        }]
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
}
