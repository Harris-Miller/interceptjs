const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const extpath = path.join(__dirname, '../src/browser/extension/');
const mock = `${extpath}chromeAPIMock`;

const globals = {};

module.exports = {
  // devtool: 'source-map',
  mode: 'production',
  entry: {
    // background: [mock, `${extpath}background/index`],
    // options: [mock, `${extpath}options/index`],
    // window: [`${extpath}window/index`],
    // remote: [`${extpath}window/remote`],
    devpanel: [mock, `${extpath}devpanel/index.js`],
    devtools: [`${extpath}devtools/index.js`]
    // content: [mock, `${extpath}inject/contentScript`],
    // pagewrap: [`${extpath}inject/pageScriptWrap`],
    // 'redux-devtools-extension': [`${extpath}inject/index`, `${extpath}inject/deprecatedWarn`],
    // inject: [`${extpath}inject/index`, `${extpath}inject/deprecatedWarn`]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin(globals),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        },
        // sourceMap: true,
        cache: true,
        parallel: true
      })
    ]
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css?$/,
      use: ['style-loader', 'raw-loader']
    }]
  }
};
