var path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var srcPath = path.join(__dirname, 'src');
var bootstrapPath = path.join(__dirname, 'node_modules/bootstrap/dist/css');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
     historyApiFallback: true
  },
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.css', '.ttf', '.svg', '.eot', '.woff', '.woff2'],
    modulesDirectories: ['node_modules', srcPath, bootstrapPath]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin()
    new LiveReloadPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
}
