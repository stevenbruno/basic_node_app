const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  const filename = q.pathname.length > 1 ? "." + q.pathname + ".html" : "./index.html";

  const availablePaths = ["./404.html", "./about.html", "./contact-me.html", "./index.html", "/"];

  if (availablePaths.includes(filename)) {
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found, default message");
      }  
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else {
    fs.readFile("./404.html", function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found, default message");
      }  
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }

}).listen(8080); 