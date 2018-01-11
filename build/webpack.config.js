'use strict'

const path = require('path');

function resolve(dir){
  return path.join(__dirname, '..', dir);
}

module.exports = {
  context:path.resolve(__dirname,'../'),
  entry: './src/ts/main.ts',
  output: {
    filename: './app/js/app.js',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
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
