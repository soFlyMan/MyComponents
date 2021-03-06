const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: [require('babel-plugin-transform-object-rest-spread')]
          },
          // query: { presets:['react'] },
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     'url-loader?limit=10000',
      //     'img-loader'
      //   ]
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use:
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          },
      },
    ]
  },
}
