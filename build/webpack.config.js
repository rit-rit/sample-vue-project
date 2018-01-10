module.exports = {
  entry: './src/ts/main.ts',
  output: {
    filename: './app/js/app.js',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      enforce: 'pre',
      exclude: /node_moduels/,
      loader: 'tslint-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
    }],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader', options: {
          loaders: {
            ts: 'ts-loader!tslint-loader',
          },
        },
      },
      {
        test: /\.tsx?$/, loader: 'ts-loader', options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
};
