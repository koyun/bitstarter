var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var html_str;
fs.readFile("index.html", "UTF8", function(err, data){
  if (err) { throw err };
  html_str = data;
});
app.get('/', function(request, response) {
  response.send(html_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
