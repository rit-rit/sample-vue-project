const path = require('path');
const webpack = require('webpack');
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = (env) => {
  if (typeof env.targetComponent === 'boolean') {
    env.targetComponent = 'App';
  }
  return {
    entry: './src/ts/main.ts',
    output: {
      path: path.resolve(__dirname, '../dist'),

      publicPath: '/dist/',
      filename: 'build.js',
    },
    module: {
      rules: [
        {
          test: /main\.ts$/,
          loader: StringReplacePlugin.replace({
            replacements: [
              {
                pattern: /\${APP}/,
                replacement: function(match, p1, offset, string) {
                  return env.targetComponent;
                },
              },
            ],
          }),
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              // Since sass-loader (weirdly) has SCSS as its default parse mode,
              // we map the "scss" and "sass" values for the lang attribute to
              // the right configs here. other preprocessors should work out of
              // the box, no loader config like this necessary.
              scss: 'vue-style-loader!css-loader!sass-loader',
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            },
            // other vue-loader options go here
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
          },
        },
      ],
    },
    plugins: [new StringReplacePlugin()],
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true,
    },
    performance: {
      hints: false,
    },
    devtool: '#eval-source-map',
  };
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}
