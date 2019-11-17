const path = require('path');

module.exports = {
  entry: ["@babel/polyfill",'./src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
         contentBase: './dist'
       },
 module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      }     
};