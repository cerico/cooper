module.exports = options => {
  return {
    entry: './src/react/index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      port: 2009,
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
