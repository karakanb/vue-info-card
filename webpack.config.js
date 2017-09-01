/* eslint-disable */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const utils = require('./build/utils');
const vueLoaderConfig = require('./build/vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ],
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  externals: {
    vuetrend: 'vuetrend'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ],
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
