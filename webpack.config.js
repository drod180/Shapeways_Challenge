module.exports = {
  context: __dirname + "/src",
  entry: "app.js",
  output: {
    path: __dirname + "/client/public",
    filename: "bundle.js"
  }
}
