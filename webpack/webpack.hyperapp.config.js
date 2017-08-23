module.exports = options => {
  return {
    entry: './src/hyperapp/index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
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
