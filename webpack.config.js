var path = require('path');
module.exports = {
  context: path.resolve(__dirname + "/client/src"),
  entry: "./app.js",
  output: {
    path: __dirname + "/client/public",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js']
  }
}
