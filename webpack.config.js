const path = require('path');

module.exports = {
  entry: {
      design_editor: './src/design-editor/index.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  watchOptions: {
    ignored: ['node_modules']
  },
  module:  {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
          }
      ]
  }
};