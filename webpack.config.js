module.exports = {
  context: __dirname,
  entry: "./FourCornerLayout.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-map'
};
