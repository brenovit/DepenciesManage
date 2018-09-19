var http = require("http");
var url = require("url");
var fs = require("fs");
var port = 8080;

var server = http.createServer(function(req, res) {
  var page = url.parse(req.url).path;
  page = page.replace("/", "");
  console.log(page);
  fs.readFile(page, function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(port);
