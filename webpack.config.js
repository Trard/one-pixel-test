const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
};