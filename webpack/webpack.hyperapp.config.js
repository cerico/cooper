const path = require('path');


module.exports = options => {
  return {
    entry: './src/hyperapp/index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      compress: true,
      port: 2002,
       historyApiFallback: {
        index: 'src/index.html',
      },
    },
    module: {
      rules: [{
        loader: 'babel-loader',
      }],
    },
  }
}
