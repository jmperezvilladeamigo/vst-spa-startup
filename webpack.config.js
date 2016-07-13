var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: 'build'
  },

  plugins: [
    new CopyWebpackPlugin([
      // {output}/index.html 
      { from: './app/index.html' }
    ])
  ],
    
  module: {
    loaders: [
      { test: /\.js$/, exclude: [ 'build', 'node_modules' ], loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
