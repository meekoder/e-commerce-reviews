const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public'); // where we will place our bundled file
const APP_DIR = path.resolve(__dirname, 'client'); // where the pre-transpiled components live

module.exports = {
  mode: 'production',
  resolve: { extensions: ['.js', '.jsx', '.json', '.css'] },
  entry: APP_DIR + '/src/index.jsx', // need to reference the point where we call reactdom.render
  output: {
    path: BUILD_DIR, //where we want to put bundle.js usually wherever index.html is
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/preset-env'],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          }],
      },
    ],
  },
  watch: false,
};
