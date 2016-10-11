var path = require('path')
var webpack = require('webpack')

module.exports = {
  // context: path.join(__dirname, 'src'),
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$|.jsx$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file',
        include: path.join(__dirname, 'src')
      },
      {
        test:   /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer')
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
