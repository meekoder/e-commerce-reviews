var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public'); // where we will place our bundled file
var APP_DIR = path.resolve(__dirname, 'client'); // where the pre-transpiled components live

module.exports = {
  mode: 'development',
  entry: APP_DIR + '/src/index.jsx', // need to reference the point where we call reactdom.render
  output: {
    path: BUILD_DIR, //where we want to put bundle.js usually wherever index.html is
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      }
    ]
  },
  watch: true
};
