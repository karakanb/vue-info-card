const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    vuetrend: 'vuetrend'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-info-card.min.js',
      libraryTarget: 'window',
      library: 'VueInfoCard',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/InfoCard.vue'),
    output: {
      filename: 'vue-info-card.js',
      libraryTarget: 'umd',
      library: 'vue-info-card',
      umdNamedDefine: true
    }
  })
];
