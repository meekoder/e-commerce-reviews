const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry:`${SRC_DIR}/index.jsx`,
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
};
