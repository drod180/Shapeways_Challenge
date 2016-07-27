User = require("./user");

document.addEventListener("DOMContentLoaded", function(event) {
  var root = document.getElementById('root');
  var user = new User(root);
});
