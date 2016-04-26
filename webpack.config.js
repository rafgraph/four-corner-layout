module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: __dirname + "/bundle",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, //this matches both .js and .jsx extensions
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-map'
};
