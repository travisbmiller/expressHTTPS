var express = require('express');
var app = express();
var port = 3000;

// adding https
var https = require('https');

// adding fs
var fs = require('fs');

// now we are going to create a new server from https
https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    }, app).listen(9000);


app.get('/', function (req, res) {
  // Send a response when we get a request 
  res.send("Hello World", req.protocol)
});

app.listen(port, function () {
  console.log("Express running on port 3000")
}); 